/** @jsx React.DOM */

var CrewBattlePlayer = React.createClass({
  render: function() {
    return (
      <td className="player">{this.props.player}</td>
    );
  }
});

var CrewBattleStocks = React.createClass({
  render: function() {
    return (
      <td className="stocks">{this.props.stocks}</td>
    );
  }
});

var CrewBattleRowList = React.createClass({
  render: function() {
    var crewRows = this.props.data.map(function(row) {
      return (
        <CrewBattleRow data={row} />
      )
    });
    return (
      <table className="table">
        <tbody>
          {crewRows}
        </tbody>
      </table>
    );
  }
});

var CrewBattleRow = React.createClass({
  render: function() {
    return (
      <tr className="crewRow">
        <CrewBattlePlayer player={this.props.data.player1.name} />
        <CrewBattleStocks stocks={this.props.data.player1.stocks} />
        <CrewBattleStocks stocks={this.props.data.player2.stocks} />
        <CrewBattlePlayer player={this.props.data.player2.name} />
      </tr>
    );
  }
});

var CrewBattleRowForm = React.createClass({
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
      <form className="crewRowForm" onSubmit={this.handleSubmit}>
      <input type="text" placeholder="Player 1" ref="p1"/>
      <input type="text" placeholder="P1 stocks" ref="p1stocks"/>
      <input type="text" placeholder="P2 stocks" ref="p2stocks"/>
      <input type="text" placeholder="Player 2" ref="p2"/>
      <input type="submit" value="Submit"/>
      </form>
    );
  }
});

var CrewBattle = React.createClass({
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
      <div>
        <CrewBattleRowList data={this.state.data} />
        <CrewBattleRowForm onRowSubmit={this.updateRows} />
      </div>
    );
  }
});

React.render(
  <CrewBattle />,
  document.getElementById('content')
);
