(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/** @jsx React.DOM */

var CrewBattlePlayer = React.createClass({displayName: "CrewBattlePlayer",
  render: function() {
    return (
      React.createElement("td", {className: "player"}, this.props.player)
    );
  }
});

var CrewBattleStocks = React.createClass({displayName: "CrewBattleStocks",
  render: function() {
    return (
      React.createElement("td", {className: "stocks"}, this.props.stocks)
    );
  }
});

var CrewBattleRowList = React.createClass({displayName: "CrewBattleRowList",
  render: function() {
    var crewRows = this.props.data.map(function(row) {
      return (
        React.createElement(CrewBattleRow, {data: row})
      )
    });
    return (
      React.createElement("table", {className: "table"}, 
        React.createElement("tbody", null, 
          crewRows
        )
      )
    );
  }
});

var CrewBattleRow = React.createClass({displayName: "CrewBattleRow",
  render: function() {
    return (
      React.createElement("tr", {className: "crewRow"}, 
        React.createElement(CrewBattlePlayer, {player: this.props.data.player1.name}), 
        React.createElement(CrewBattleStocks, {stocks: this.props.data.player1.stocks}), 
        React.createElement(CrewBattleStocks, {stocks: this.props.data.player2.stocks}), 
        React.createElement(CrewBattlePlayer, {player: this.props.data.player2.name})
      )
    );
  }
});

var CrewBattleRowForm = React.createClass({displayName: "CrewBattleRowForm",
  handleSubmit: function(e) {
    e.preventDefault();
    var p1 = this.refs.p1.getDOMNode().value.trim();
    var p1stocks = this.refs.p1stocks.getDOMNode().value.trim();
    var p2 = this.refs.p2.getDOMNode().value.trim();
    var p2stocks = this.refs.p2stocks.getDOMNode().value.trim();
    if (!p1 || !p2 || !p1stocks || !p2stocks) {
      return;
    }

    this.props.onRowSubmit({
      player1: {
        name: p1,
        stocks: p1stocks
      },
      player2: {
        name: p2,
        stocks: p2stocks
      }
    });

    this.refs.p1.getDOMNode().value = '';
    this.refs.p2.getDOMNode().value = '';
    this.refs.p1stocks.getDOMNode().value = '';
    this.refs.p2stocks.getDOMNode().value = '';
    return;
  },
  render: function() {
    return (
      React.createElement("form", {className: "crewRowForm", onSubmit: this.handleSubmit}, 
      React.createElement("input", {type: "text", placeholder: "Player 1", ref: "p1"}), 
      React.createElement("input", {type: "text", placeholder: "P1 stocks", ref: "p1stocks"}), 
      React.createElement("input", {type: "text", placeholder: "P2 stocks", ref: "p2stocks"}), 
      React.createElement("input", {type: "text", placeholder: "Player 2", ref: "p2"}), 
      React.createElement("input", {type: "submit", value: "Submit"})
      )
    );
  }
});

var CrewBattle = React.createClass({displayName: "CrewBattle",
  getInitialState: function() {
    return {data: []};
  },
  updateRows: function(rowdata) {
    var curData = this.state.data;
    var newData = curData.concat([rowdata]);
    this.setState({data: newData});
  },
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(CrewBattleRowList, {data: this.state.data}), 
        React.createElement(CrewBattleRowForm, {onRowSubmit: this.updateRows})
      )
    );
  }
});

React.render(
  React.createElement(CrewBattle, null),
  document.getElementById('content')
);


},{}]},{},[1])