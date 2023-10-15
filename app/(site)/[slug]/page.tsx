import { getPage } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react";
type  Props  = {
    params: {slug: string}
}
export default async function Page({ params }: Props) {
    const page = await getPage(params.slug)
    return(
    <div>
        <h1 className="rounded-lg text-black-500 text-xl font-bold py-3 px-5 whitespace-nowrap hover:text-pink-100 transition">
        {page.title}
        </h1>
        <div className="text-lg text-gray-800 mt-10">
        <PortableText value={page.content} />
        </div>
        </div>
    );
}

