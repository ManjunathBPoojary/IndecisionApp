class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
        this.state = {
            show: false
        };
    }

    handleVisibilityToggle(){
        this.setState((prevState)=>{
            return {
                show: !prevState.show
            };
        });
    }
    render(){
        return(
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleVisibilityToggle}>{this.state.show ? 'Hide Details' : 'Show Details'}</button>
            {
                this.state.show && (
                    <div><p>Something Secrete!!</p></div>
                )
            }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle/>,document.getElementById('app'));

// let show = false;

// const toggleMechanism = () => {
//     console.log("Something happening!!");
//     show = !show;
//     render();
// }


// const rootApp = document.getElementById('app');

// const render = () => {
//     const buidlItVisible = [
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleMechanism}>{show ? 'Hide Details': 'Show Details'}</button>
//             {
//                 show && (
//                     <div>Something showing up!!</div>
//                 )
//             }
//         </div>
//         ];
//         ReactDOM.render(buidlItVisible, rootApp);
// }

// render();