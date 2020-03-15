import React, { Component } from 'react';
import { Rate, Select, Button } from 'antd';
import './style.css';


const { Option } = Select;
class PageFilter extends Component {
    constructor(props) {
        super(props)
        this.types = this.props.selectionTypes || [];
        this.allGenres = this.props.genres || {};
        this.years = this.props.years || 20
        this.yearOptions = this.generateYearOptions();
        this.defaultSelectionType = this.props.defaultSelectionType;
        this.genres = this.allGenres[this.defaultSelectionType.toLowerCase()];
    }
    state = {
        selectedGenreList: [],
        type: '',
        genre: '',
        from: '',
        to: '',
        rate: 0
    }

    emitFilterValues = () => {
        let obj = {
            type: this.state.type,
            genre: this.state.genre,
            from: this.state.from,
            to: this.state.to,
            rate: this.state.rate,
        }
        if (this.props.filterValuesMethod) {
            this.props.filterValuesMethod(obj);
        }
    }

    componentDidMount () {
        this.setState({
            selectedGenreList: this.genres
        })
    }

    generateYearOptions () {
        var year = (new Date()).getFullYear();
        var minYear = year - this.years;
        var options = [];
        for (var i=year; i>=minYear; i--) {
            options.push(i)
        }
        return options;
    }

    typeSelected = (e) => {
        this.setState({
            type: e,
            selectedGenreList: this.allGenres[e.toLowerCase()]
        })
    }

    genereChange = (e) => {
        var data = this.state.selectedGenreList[e];
        this.setState({
            genre: data
        })
    }

    dateFrom = (e) => {
        if (this.state.to !== '' && e > this.state.to) {
            this.setState({
                to: e + 1
            })
        }
        this.setState({
            from: e
        })
    }

    dateTo = (e) => {
        if (this.state.from !== '' && e < this.state.from) {
            this.setState({
                from: e - 1
            })
        }
        this.setState({
            to: e
        })
    }

    getOptions (val, index) {
        return <Option key={index} value={val}>{val}</Option>
    }

    rateChange = (e) => {
        this.setState({
            rate: e
        })
    }


    render() {
        return (
            <div className="pageFilter">
                <div className="filterRow">
                    <div className="rowLabel">Type:</div>
                    <Select onSelect={this.typeSelected}>
                        {
                            this.types.map( (elm, index) => {
                                console.log(elm)
                                return this.getOptions(elm, index)
                            })
                        }
                    </Select>
                </div>

                <div className="filterRow">
                    <div className="rowLabel">Genre:</div>
                    <Select onSelect={this.genereChange}>
                        {
                            this.state.selectedGenreList.map( (elm, index) => {
                                return <Option key={index} value={index}>{elm.name}</Option>
                            })
                        }
                    </Select>
                </div>

                <div className="filterRow">
                    <div className="rowLabel">Year:</div>
                    <div className="flex">
                        <div className="mr2 flex year">
                            <Select onSelect={this.dateFrom}>
                                {
                                    this.yearOptions.map( (elm, index) => {
                                        return this.getOptions(elm, index)
                                    })
                                }
                            </Select>
                        </div>
                         to
                        <div className="ml2 flex year">
                            <Select onSelect={this.dateTo}>
                                {
                                    this.yearOptions.map( (elm, index) => {
                                        return this.getOptions(elm, index)
                                    })
                                }
                            </Select>
                        </div>
                    </div>
                </div>
                
                <div className="filterRow">
                    <div className="rowLabel">Ratings:</div>
                    <Rate allowClear={true} onChange={this.rateChange}/>
                </div>

                <div className="filterRow mt4">
                  <Button ghost onClick={this.emitFilterValues}>Apply</Button>
                </div>
            </div>
        );
    }
}
  
export default PageFilter;