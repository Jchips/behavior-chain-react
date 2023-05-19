import React, { Component } from 'react';

class Render extends Component {
  render() {
    const { fullChain, showChain } = this.props;
    console.log('fullChain: ', fullChain); // delete later
    console.log('fullChain length: ', fullChain.length); // delete later
    return (
      <section className='rendered-behavior-chain col-xl-4 col-lg-3 col-md-12 col-sm-12 col-12'>
        <h2>Rendered Behavior Chain</h2>
        {showChain && (<div className='rendered-chain-container'>
        {(fullChain.map(chainLink => 
          <div id={chainLink.id} key={chainLink.id}>
            <h3>{chainLink.title}</h3>
            <p>{chainLink.userInput}</p>
          </div>  
        ))}
        </div>)}
      </section>
    );
  }
}

export default Render;
