import coin_flipping from '../logos/flipping-coin.gif';
import React, { Component } from 'react';
import eth from '../logos/eth.png';
import './App.css';

class Loading extends Component {

  render() {
    return (
      <div className="container-fluid mt-5 col-m-4" style={{ maxWidth: '550px' }}>
        <div className="col-sm">
          <main role="main" className="col-lg-12 text-monospace text-center text-white">
            <div className="content mr-auto ml-auto">
              <div id="content" className="mt-3">
                <div className="card mb-4 bg-dark border-grey py-5">
                  <div className="card-body">
                    <div>
                        <img src={coin_flipping} width="225" alt="logo" />
                    </div>
                    &nbsp;
                    <p></p>
                    <div className="input-group mb-4">
                        <input
                          id="disabledInput"
                          type="text"
                          className="form-control form-control-md"
                          placeholder="Result Pending, please wait!"
                          disabled
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <img src={eth} height="20" alt=""/>&nbsp;<b>ETH</b>
                          </div>
                        </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-secondary btn-lg"
                      onClick={(event) => {
                      }}>
                        Tails
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button
                      type="submit"
                      className="btn btn-secondary btn-lg"
                      onClick={(event) => {
                      }}>
                        Heads
                    </button>
                  </div>
                  <div>
                    {!this.props.balance ? <div id="loader" className="spinner-border float-right" role="status"></div> :
                      <div className="mr-auto ml-auto mt-4" style={{ width: '220px' }}>
                        <div className="float-left" style={{ height: '17px' }}>
                          <b>MaxBet&nbsp;</b>
                        </div>
                        <div className="float-right" style={{ height: '17px' }}>
                          {Number(this.props.web3.utils.fromWei((this.props.maxBet).toString())).toFixed(5)} <b>ETH&nbsp;</b>
                        </div>                      
                        <br></br>
                        <div className="float-left" style={{ height: '17px' }}>
                          <b>MinBet</b>($1)&nbsp;
                        </div>
                        <div className="float-right" style={{ height: '17px' }}>
                          {Number(this.props.web3.utils.fromWei((this.props.minBet).toString())).toFixed(5)} <b>ETH&nbsp;</b>
                        </div>
                        <br></br>
                        <div className="float-left">
                          <b>Balance&nbsp;</b>
                        </div>
                        <div className="float-right">
                          {Number(this.props.web3.utils.fromWei((this.props.balance).toString())).toFixed(5)} <b>ETH&nbsp;</b>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Loading;