import { Wrapper } from "./Wrapper"

export const RenderData = props => {
    return (
        <Wrapper>
            <div>{props.id}</div>
            <h2>{props.title}</h2>
            <p>{props.title}</p>
            <img src={props.thumbnailUrl}/>
        </Wrapper>

    )
}

