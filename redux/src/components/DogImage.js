import React from 'react';
import { connect } from 'react-redux';
import { getDogImage } from '../actions';

function DogImage(props) {
    return (
        <div className="box">
            {props.loading ? (
                <h1>Loading</h1>
            ) : (
                <img style={{maxWidth: "200px"}} src={props.dog} alt="" />
            )}
            <div>
            <button onClick={() => {
                props.getDogImage();
            }}
            >Get a Dog Pic
            </button>
            </div>

        </div>
    );
}

const mapStateToProps = state => {
    return {
        dog: state.dog,
        loading: state.loading
    }
}

export default connect(
    mapStateToProps,
    { getDogImage }
)(DogImage);


// const DogImage = props => {

//         useEffect(() => {
//             props.getDogImage();
//         }, [props.getDogImage]);

//     if (props.isFetching) {
//         return <h3>Finding a dog pic</h3>;
//     }

//     return (
//         <div>
//             <h2>Here's a Dog</h2>
//             <img src={props.dogImage} alt='pic' />
//             <button onClick={props.getDogImage}>Get a new dog</button>
//         </div>
//     );
// };

// const mapStateToProps = state => {
//     return {
//         dogImage: state.image.dogImage,
//         isFetching: state.isFetching,
//         error: state.error,
//     }
// }

// export default connect( 
//     mapStateToProps, 
//     { getDogImage }
//     )(DogImage);