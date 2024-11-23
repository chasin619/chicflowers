import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { personalInfo, financialInfo, media, additionalInfo } =
    await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `${personalInfo.fullName}`,
    to: `chicflowersonline@gmail.com`,
    subject: "Event Inquiry Form Submission",
    html: `
    <h2>Event Inquiry Form Submission</h2>
    <h3>Personal Information</h3>
    <p><strong>Full Name:</strong> ${personalInfo.fullName}</p>
    <p><strong>Location:</strong> ${personalInfo.location}</p>
    <p><strong>Email:</strong> ${personalInfo.email}</p>
    <p><strong>Event Date:</strong> ${personalInfo.eventDate}</p>
    <p><strong>Event Type:</strong> ${personalInfo.eventType}</p>
    
    <h3>Financial Information</h3>
    <p><strong>Number of Guests:</strong> ${financialInfo.guests}</p>
    <p><strong>Wedding Investment:</strong> ${
      financialInfo.weddingInvestment
    }</p>
    <p><strong>Decor Investment:</strong> ${financialInfo.decorInvestment}</p>
    <p><strong>Extra Services:</strong> ${financialInfo.extraService
      .map(
        (service) =>
          service.charAt(0).toUpperCase() + service.slice(1).toLowerCase()
      )
      .join(", ")}</p>     
    <h3>Media Information</h3>
    <p><strong>Description:</strong> ${media.description}</p>
    
    <h3>Additional Information</h3>
    <p><strong>Preferred Contact Type:</strong> ${
      additionalInfo.contactType
    }</p>
    ${
      additionalInfo.instagramHandle
        ? `<p><strong>Instagram Handle:</strong> ${additionalInfo.instagramHandle}</p>`
        : ""
    }
    ${
      additionalInfo.tiktokHandle
        ? `<p><strong>TikTok Handle:</strong> ${additionalInfo.tiktokHandle}</p>`
        : ""
    }
    <p><strong>Permission to Share Pictures:</strong> ${
      additionalInfo.sharePicture
    }</p>
    <p><strong>How Did You Hear About Us:</strong> ${
      additionalInfo.hearAbout
    }</p>
    <p><strong>Contact Details:</strong> ${additionalInfo.contact}</p>
  `,
    attachments: media.visuals.map((visual) => ({
      filename: visual.name,
      path: visual.content,
    })),
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email.",
      },
      {
        status: 500,
      }
    );
  }
}
