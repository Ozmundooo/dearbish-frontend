import Header from "../../components/Header"
import { sanityClient, urlFor} from "../../sanity"
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useState } from "react";
export const Personal = (
    {
        title,
        mainImage,
        images,
        subtext,
        description 
    }
) =>{
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const imageArray = [];

    images.forEach(image => {
        imageArray.push(urlFor(image));
      })
    return(
        <>
            <Header/>
            <div className='h-screen w-screen bg-black px-24 flex justify-between  place-items-center'>
                <div className="w-1/2 flex justify-center">
                    <a onClick={() => setIsOpen(true)}>
                        <img className="w-[500px] h-[500px]" src={urlFor(mainImage)}/>
                    </a>
                </div>
                <div className="text-white w-1/2">
                    <h2 className="text-4xl font-bold">{title}</h2>
                    <br></br>
                    <h3 className="text-lg ">{subtext}</h3>
                    <br></br>
                    <p className="text-2xl">{description}</p>
                </div>
            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={imageArray[photoIndex]}
                    nextSrc={imageArray[(photoIndex + 1) % imageArray.length]}
                    prevSrc={imageArray[(photoIndex + imageArray.length - 1) % imageArray.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + imageArray.length - 1) % imageArray.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % imageArray.length)
                    }
                />
            )}
        </>
    )
}

export const getServerSideProps = async  (pageContext) =>{
    const pageSlug = pageContext.query.slug
    const query = `*[ _type == "personal" && slug.current == $pageSlug][0]{
        title,
        mainImage,
        images,
        subtext,
        description
    }`

    const personal =  await sanityClient.fetch(query, { pageSlug })
    if(!personal){
        return{
            props:null,
            notFound: true
        }
    }
    else{
        return{
            props:{
                title: personal.title,
                subtext: personal.subtext,
                mainImage: personal.mainImage,
                images: personal.images,
                description: personal.description
            }
        }
    }

}

export default Personal