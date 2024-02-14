export default function Page({ params }: { params: { id: any } }) {
    return <div>My Page: {params.id}</div>
}