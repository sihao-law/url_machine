
import React, { Component } from "react";
//import PropTypes from "prop-types";
import { Button, Input, Select } from 'antd';
import constants from './../constants/constants';
import { DashboardStyle } from './dashboardStyle';

const { Option } = Select;
const { TextArea } = Input;
class Dashboard extends Component {


    urlListDelimiter = '\n';
    urlDelimiter = '/';

    constructor(props) {
        super(props);

        this.state = {
            interval: 10,
            id: 'Q132627027',
            urlList: `https://m.qoo10.sg/livetweet/37778/Q\nhttps://m.qoo10.sg/livetweet/37875/Q\nhttps://m.qoo10.sg/livetweet/37920/Q\nhttps://m.qoo10.sg/livetweet/38020/Q\nhttps://m.qoo10.sg/livetweet/38020/Q`,// list in string
            aurlList: [],
            message: '0/0 completed',

            mine: {
                id: 'Q132627027',
                aUrlList: [],
            }
        }


    }


    onProcessUrlList = () => {

        const interval = this.state.interval;
        var newUrlList = [];

        //get list of url
        var aUrlList = this.state.urlList.split("\n");
        console.log('aUrlList ', aUrlList);

        //replace id with provide id
        newUrlList = aUrlList.map((url, index) => {
            var newUrl = null;
            var trimUrl = url.trim();

            //check and splice url with id
            var aUrl = trimUrl.split(this.urlDelimiter)

            //replace last array
            aUrl[aUrl.length - 1] = this.state.id;

            newUrl = aUrl.join(this.urlDelimiter);

            return newUrl;
        });

        var newUrlListMine = [];
        newUrlListMine = aUrlList.map((url, index) => {
            var newUrl = null;
            var trimUrl = url.trim();

            //check and splice url with id
            var aUrl = trimUrl.split(this.urlDelimiter)

            //replace last array
            aUrl[aUrl.length - 1] = this.state.mine.id;

            newUrl = aUrl.join(this.urlDelimiter);

            return newUrl;
        });
        console.log('newUrlList ', newUrlList);
        this.setState({
            message: `0/${newUrlList.length} completed...`
        })


        function popupwindow(url, title, w, h) {
            var y = window.outerHeight / 2 + window.screenY - (h / 2)
            var x = window.outerWidth / 2 + window.screenX - (w / 2)
            return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + y + ', left=' + x);
        }

        //open 1 by 1 of urlList to new tab and close it after {this.state.interval} seconds
        newUrlList.forEach(function (url, index) {

            if (url === null || url === '') {
                return;
            }
            console.log(`${index} ${url}`);
            var tabWindow = popupwindow(url, `Tab ${index}`, 400, 400);

            setTimeout(() => {
                tabWindow.close();
            }, interval * 1000);
        })

        newUrlListMine.forEach(function (url, index) {
            if (url === null || url === '') {
                return;
            }
            console.log(`${index} ${url}`);
            var tabWindow = popupwindow(url, `Tab ${index}`, 400, 400);
            setTimeout(() => {
                tabWindow.close();
            }, interval * 1000);
        })


    }

    closeWindowcb = (index, tabWindow, aListSize) => {
        tabWindow.close();
        this.setState({
            message: `${index}/${aListSize} completed...`
        });
    }


    onClearUrlList = () => {
        this.setState({
            urlList: '',
            aUrlList: []
        })
    }


    onIntervalSelectChange = (interval) => {
        console.log(`onIntervalSelectChange ${interval}`);
        this.setState({
            interval
        })
    }

    onInputChange = ({ target: { value } }) => {
        //console.log(`onInputChange ${value}`);
        const aUrlList = value.split(this.urlListDelimiter);
        var message = null;

        message = `${0}/${aUrlList.length} ${constants.completed}`;

        this.setState({
            urlList: value,
            aUrlList: aUrlList,
            message: message
        });
    }

    onIdChange = ({ target: { value } }) => {
        // console.log(`onIdChange ${value}`);
        this.setState({
            id: value
        });
    }


    //#region process mine function

    processMineList = () => {

    }


    //#endregion

    render() {

        const { urlList, id, message } = this.state;


        return (
            <DashboardStyle >

                <div className='flex_container'>
                    <div className=' dash_caption'>Interval in second</div>
                    <Select defaultValue="10" style={{ width: 120 }} onChange={this.onIntervalSelectChange}>
                        {constants.IntervalSecond.map((sec, index) => {
                            return <Option key={index} value={sec}>{sec}</Option>
                        })}
                    </Select>
                </div>
                <div className='flex_container'>
                    <div className=' dash_caption'>key in Id</div>
                    <Input className='input_style'
                        placeholder="Please key in your Id" value={id} onChange={this.onIdChange} />
                </div>
                <div className='flex_container'>
                    {message}
                </div>
                <div className='flex_container'>
                    <TextArea rows={10} placeholder="Paste your url here" value={urlList} onChange={this.onInputChange} />
                </div>
                <div className='button_container'>
                    <Button type="primary" onClick={this.onProcessUrlList}>Run</Button>
                    <Button type="danger" onClick={this.onClearUrlList}>Clear</Button>
                </div>
                {/* </div> */}
            </DashboardStyle>
        )
    }

}




export default Dashboard;