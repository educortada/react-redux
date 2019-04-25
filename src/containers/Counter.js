import { connect } from 'react-redux'
import Counter from '../components/Counter'

// El container realiza la conexión a la store de Redux
const mapStateToProps = (state) => {
  return { counter: state.counter }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementar: () => dispatch({ type: 'INCREMENTAR' }),
    decrementar: () => dispatch({ type: 'DECREMENTAR' })
  }
}

const createConnection = connect(mapStateToProps, mapDispatchToProps)

// El componente Counter recibe las props del Provider
const ComponentWithConnectionToRedux = createConnection(Counter)

export default ComponentWithConnectionToRedux