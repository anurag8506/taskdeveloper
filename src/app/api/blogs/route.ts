import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Blog from "@/models/blogs";

// ✅ Fetch all blogs with pagination and optimization
export async function GET(request: Request) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    // ✅ Fetch blogs with pagination and select only required fields
    const blogs = await Blog.find()
      .select('blogId title metaTitle metaDescription image createdAt') // Only select needed fields
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip)
      .lean(); // Use lean() for faster queries

    // ✅ Get total count for pagination
    const totalBlogs = await Blog.countDocuments();
    const totalPages = Math.ceil(totalBlogs / limit);

    // ✅ Optimize image data for listing (you can create thumbnails in production)
    const optimizedBlogs = blogs.map(blog => ({
      ...blog,
      // Truncate description for listing page
      description: blog.metaDescription?.substring(0, 150) + "...",
      // In production, replace with thumbnail URL
      image: blog.image
    }));

    return NextResponse.json({ 
      success: true, 
      data: optimizedBlogs,
      pagination: {
        currentPage: page,
        totalPages,
        totalBlogs,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    });
  } catch (error: unknown) {
    console.error("Error fetching blogs:", error);
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}