import React, { Component } from 'react'
import {GoogleApiWrapper,Map,Marker,InfoWindow} from 'google-maps-react';
const mapStyle = {
  width:'100%',
  height:'400px'
}
export class Googlemap extends Component  {
    constructor(props) {
        super(props);
        this.state = {
          selectedPlace: null
        };
      }
    
      onMarkerClick = (props, marker) => {
        this.setState({ selectedPlace: props });
      }
    
      onInfoWindowClose = () => {
        this.setState({ selectedPlace: 'lalitpur' });
      }
    
    centerMoved(mapProps, map) {
        // ...
      }
    render(){
        return (
            <div>
                  <Map google={this.props.google} zoom={14}  initialCenter={{
            lat: 27.651536,
            lng: 85.327837
          }}
          onDragend={this.centerMoved} 
          style={mapStyle}
>
        
          <Marker onClick={this.onMarkerClick}
                 name={'lalitpur'} />
        
         <InfoWindow onClose={this.onInfoWindowClose}>
             <div>
             <h1>{this.state.selectedPlace && this.state.selectedPlace.name}</h1>
             </div>
         </InfoWindow> 
        </Map>
        
            </div>
          )
    }
 

}


export default GoogleApiWrapper({
    apiKey: "AIzaSyCA85XurkloA21xDaZ7T6XHhESS2m9b-yY"
  })(Googlemap)