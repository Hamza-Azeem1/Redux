import { useSelector } from 'react-redux'

const Navbar = () => {
    const count = useSelector(state => state.counter.value)

    return (
        <>
            <div>I am Navbar and counter is: {count}</div>
            <br />
        </>
    )
}
export default Navbar