import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  freePlan: f({ 
      image: { maxFileSize: "2MB", maxFileCount: 1 },
      video: { maxFileSize: "2MB", maxFileCount: 1 },
      pdf: { maxFileSize: "2MB", maxFileCount: 1 },
      text: { maxFileSize: "2MB", maxFileCount: 1 },
      audio: { maxFileSize: "2MB", maxFileCount: 1 },
    })
    .onUploadComplete(async ({ file }) => {
      console.log("file url", file.url);
    }),


    basicPlan: f({ 
      image: { maxFileSize: "8MB", maxFileCount: 1 },
      video: { maxFileSize: "8MB", maxFileCount: 1 },
      pdf: { maxFileSize: "8MB", maxFileCount: 1 },
      text: { maxFileSize: "8MB", maxFileCount: 1 },
      audio: { maxFileSize: "8MB", maxFileCount: 1 },
    })
    .onUploadComplete(async ({ file }) => {
      console.log("file url", file.url);
    }),

    proPlan: f({ 
      image: { maxFileCount: 1 },
      video: { maxFileCount: 1 },
      pdf: { maxFileCount: 1 },
      text: { maxFileCount: 1 },
      audio: { maxFileCount: 1 },
    })
    .onUploadComplete(async ({ file }) => {
      console.log("file url", file.url);
    }),


} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;