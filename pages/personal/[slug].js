import Header from "../../components/Header"
import { sanityClient, urlFor} from "../../sanity"

export const Personal = (
    {
        title,
        mainImage,
        images,
        subtext,
        description 
    }
) =>{
    console.log(description)
    return(
        <>
            <Header/>
            <div className='h-screen w-screen bg-black px-24 flex justify-between  place-items-center'>
                <div className="w-1/2 flex justify-center">
                    <img className="w-[500px] h-[500px]" src={urlFor(mainImage)}/>
                </div>
                <div className="text-white w-1/2">
                    <h2 className="text-4xl font-bold">{title}</h2>
                    <br></br>
                    <h3 className="text-lg ">{subtext}</h3>
                    <br></br>
                    <p className="text-2xl">{description}</p>
                </div>
            </div>
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