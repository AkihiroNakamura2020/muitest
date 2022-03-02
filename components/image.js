export default function MyImage(props) {
    let fname = './' + props.fname
    let size = props.size + "px"
  
    return (
      // <img width={size} border="1"
       <img width={size} border="0"
          src={fname} />
    )
  }