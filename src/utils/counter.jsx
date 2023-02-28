
import { useSpring, animated } from 'react-spring'

export function Counter({value}) {
    function Number({ n }) {
        const { number } = useSpring(
            {
                from: { number: 0 },
                number: n,
                delay: 200,
                config: { mass: 1, tension: 21, friction: 10 },
            }
        )
        return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
    };
    return (<Number n={value} />)

}