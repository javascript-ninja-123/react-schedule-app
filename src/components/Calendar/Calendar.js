import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Input } from 'reactstrap';
import moment from 'moment';
import {timeConverter} from '../Util/Time';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './Calendar.css';


const event =  [
  {
    id:'0',
    title: 'All Day Event very long title',
    allDay: false,
    start: new Date(2018, 3, 13),
    end: new Date(2018, 3, 13),
  }
]


BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

 class Calendar extends Component {

  state = {
    modal:false,
    renderModal:false,
    start:'',
    end:'',
    name:'',
    events:[]
  }

  onChange = (e,text) => this.setState({[text]:e.target.value})

  createModal = () => {
    if(this.state.renderModal){
      return(
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
         <ModalHeader toggle={this.toggle}>Schedule a session with Sung</ModalHeader>
         <ModalBody>
              <p>session time:{this.state.start} to {this.state.end}</p>
            <Input type="text" name="name" id="name" placeholder="your name"
              value={this.state.name}
              onChange={e=> this.onChange(e,'name')}
             />
         </ModalBody>
         <ModalFooter>
           <Button color="primary" onClick={this.confirm}>Confirm</Button>
         </ModalFooter>
       </Modal>
      )
    }
    else return;
  }

  confirm = async () => {
    await this.setState({modal:!this.state.modal, renderModal:false})
    await this.setState({
      events:[
        {title:this.state.name,start:moment(this.state.start).toDate(),end:moment(this.state.end).toDate(),allDay:false}
      ]})
  }


  slotSelected = (slotInfo) => {
    const {start,end} = slotInfo;
    const newStart =  timeConverter(start)
    const newEnd =  timeConverter(end)
    this.setState({renderModal:true,modal:!this.state.modal,start:newStart,
      end:newEnd,
    })
  }
  toggle = () => this.setState({modal:!this.state.modal})

  render() {
    return (
      <div className='Calendar'>
        <BigCalendar
          events={this.state.events}
          views={['week']}
          view='week'
          startAccessor='start'
          endAccessor='end'
          selectable
          step={60}
          onSelectSlot={this.slotSelected}
          />
        {this.createModal()}
      </div>
    );
  }
}

export default Calendar
