
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Input, Select } from 'antd';
import constants from './../constants/constants';
import { DashboardStyle } from './dashboardStyle';

const { Option } = Select;
const { TextArea } = Input;
class Dashboard extends Component {


    handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    render() {
        return (
            <DashboardStyle >

                <div className='flex_container'>
                    <div className=' dash_caption'>Interval in second</div>
                    <Select defaultValue="5" style={{ width: 120 }} onChange={this.handleChange}>
                        {constants.IntervalSecond.map((sec, index) => {
                            return <Option value={sec}>{sec}</Option>
                        })}
                    </Select>
                </div>
                <div className='flex_container'>
                    <div className=' dash_caption'>key in Id</div>
                    <Input className='input_style'
                        placeholder="Please key in your Id" />
                </div>
                <div className='flex_container'>
                    Message box
                    </div>
                <div>
                    <TextArea rows={10} placeholder="Paste your url here" />
                </div>
                <div className='button_container'>
                    <Button type="primary">Run</Button>
                    <Button type="danger">Clear</Button>
                </div>
                {/* </div> */}
            </DashboardStyle>
        )
    }

}




export default Dashboard;