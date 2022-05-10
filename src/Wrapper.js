import './Wrapper.css'

export const Wrapper = props => {
    let classes = 'wrapper ' + props.className
    return <div className={classes}>{props.children}</div>
}