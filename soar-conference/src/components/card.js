export default function Card(props) {
  return(
    <div className="grid lg:grid-cols-3 grid-cols-1 mx-auto w-fit ">
      <img src={props.imgpath} className="max-w-96 w-full self-center lg:mx-0 mx-auto"/>
      <div className="lg:col-span-2 lg:p-10 p-4 mx-auto">
        <h4 className="text-center text-4xl mb-8">{props.title}</h4>
        <p className="text-xl p-3">{props.message}</p>
      </div>
    </div>
  )
}