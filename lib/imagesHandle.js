import fs from 'fs'
import path from 'path'

export async function getStaticPaths() {
    // console.log("fs");
    // console.log(fs);
   // const paths = getAllImages()
    // return {
    //     paths,
    //     fallback: false
    // }
}

export function getAllImages() {
    console.log("getAllImages");
    //const fileNames = fs.readdirSync("/");
    
    const eyesDirectory = path.join(process.cwd(), 'public\\images\\svg\\eyes');
    console.log("process.cwd()");
    console.log(process.cwd());
    console.log("postsDirectory 1");
    console.log(eyesDirectory);
    const fileNames = fs.readdirSync(eyesDirectory);
    console.log(fileNames); 

   // console.log(fs);
    // Returns an array that looks like this:
    // return [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName
        }
      }
    })
  }
