import { useWheather } from '../context/WheatherContext'

function Card() {
    const Wheathervalues = useWheather();
    const data = Wheathervalues.data;
    return (
        <div style={{ display:'flex',flexDirection:'row'}}>
           
            {(data)&&

            data.map((data,i) =>  
            
            <span className={i===0 ?"card border border-primary border-5":"card"}  key={i} style={{width:200}}>
            <img src={data.icon} key={i+8}/>
            <div className="card-body" key={i+16}>
                    <h5 className="card-title" key={i+24}>{data.day}</h5>
                     <p className="card-text" key={i+32}>{`max: ${data.max} min: ${data.min}`}</p>
            </div>
            </span>
            )
           
        }
        </div>
    )
}

export default Card
