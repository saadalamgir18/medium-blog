import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma";

export async function POST(req: NextRequest) {
  const request = await req.json();

  console.log("body", request);
  const post = await prisma.post.create({
    data: {
      title: request.data.title,
      content: request.data.content,
      autherId: request.data.autherId,
      published: request.data.published,
    },
  });
  if (post) {
    return NextResponse.json({
      message: "POST request working fine",
      id: post.id,
    });
  } else {
    return NextResponse.json({
      message: "post request not working",
    });
  }
}

// export async function PUT(request: NextRequest) {
//   const body = await request.json();

//   // const prisma = new PrismaClient({
//   //   datasourceUrl: process.env.DATABASE_URL,
//   // }).$extends(withAccelerate());
//   await prisma.post.update({
//     where: {
//       id: body.id,
//       autherId: userid,
//     },
//     data: {
//       title: body.title,
//       content: body.content,
//     },
//   });
//   return NextResponse.json({
//     message: "PUT request working fine",
//   });
// }

export async function DELETE(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  try {
    const delPost = await prisma.post.delete({
      where: {
        id: body.id,
      },
    });
    console.log(delPost);
    if (delPost) {
      return NextResponse.json({
        message: "Post Deleted successfully!",
      });
    }
  } catch (err) {
    console.log("eroor happend -------------------", err);
    return NextResponse.json({
      message: "Id doest not exist",
      error: (err as Error).message,
    });
  }
}
