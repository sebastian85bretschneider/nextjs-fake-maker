import styles from '../styles/home.module.css'
import Image from 'next/image'
import circleYellow from '../public/images/circle-yellow.jpg'
import circleBackgroundBlack from '../public/images/circle-background-black.png' 
import eyeSvg1 from '../public/images/svg/eyes/eye_1.svg'
import { getAllImages } from '../lib/imagesHandle'
import Link from 'next/link'
import React, { useState } from 'react';


export async function getStaticProps() {
    const allPostsData = getAllImages();
    console.log("allPostsData index");
    console.log(allPostsData);
    console.log("fs");
  //  console.log(fs);
    //const  fileNames  =  fs . readdirSync ( postsDirectory ) ;
    return {
        props: {
            allPostsData
        }
    }
}


export default function homepage({allPostsData}) {
    console.log("allPostsData");
    console.log(allPostsData);
    console.log(allPostsData[0].params.id);
    console.log(circleBackgroundBlack);
    console.log(eyeSvg1);

    const [count, setCount] = useState(1);
    
   
    const handleClick = function(e) {
        e.preventDefault();
        console.log("click");
        console.log(e);
        setCount(2);
        // const allImages = getAllImages();
        // console.log("allImages");
        // console.log(allImages);
        // test 2
    }

    // https://dev.to/dolearning/importing-svgs-to-next-js-nna
    // https://codesandbox.io/s/next-import-svg-8rip3
    // https://www.iconfinder.com/search?q=eye&price=free

    return (
        <div className={styles.container}>
            <div>
                <h1>Facemaker</h1>
                <div className={styles.main__image_container}>
                    <Image className={styles.main__images} src={circleBackgroundBlack} width={100} height={100}></Image>
                    <div className={styles.face__container}>
                        <div className={styles.icon__default}>
                            
                            <Image src={"/images/svg/eyes/eye_" + count + ".svg"} height={30} width={30}></Image>
                            <Image src={eyeSvg1} height={30} width={30}></Image>
                        </div>
                        <Link href="/" >
                            <a onClick={(e) => handleClick(e)} >Next Image</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}