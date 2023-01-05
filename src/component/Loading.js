import ReactLoading from 'react-loading'

const Loading = ({msg}) => {
  return (
        <div className="log-in-out">
            <h1>{msg}...</h1>
            <div>
                <ReactLoading 
                    type="bars"
                    color="LightGreen"
                    height={800}
                    width={200}
                />
            </div>
        </div>
  )
}

export default Loading