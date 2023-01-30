


export const  Card  = ({obj})=>{
    return(
        <li className=" col-md-3 ">
        <div className="card">
          <img
            className="card-img-top  "
            src={obj.flags.png}
            width="100%"
            height="150"
          />
          <div className="card-body">
            <h2> {obj.name.common}</h2>
            <strong className="d-block">
              Population:{obj.population}
            </strong>
            <strong className="d-block">Region:{obj.region}</strong>
            <strong className="d-block">Capital:{obj.capital}</strong>
          </div>
        </div>
      </li>
    )
}