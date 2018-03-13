import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Input } from 'reactstrap';
import moment from 'moment';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import {timeConverter,toTime} from '../Util/Time';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './Calendar.css';
import Banner from '../Banner/Banner';



BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))
const DragAndDropCalendar = withDragAndDrop(BigCalendar)

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
           <Button color="primary" onClick={this.confirm}>Add</Button>
         </ModalFooter>
       </Modal>
      )
    }
    else return;
  }

  confirm = async () => {
    await this.setState({modal:!this.state.modal, renderModal:false})
    await this.setState({
      events:[...this.state.events,{title:this.state.name,start:toTime(this.state.start),end:toTime(this.state.end),allDay:false}]})
    this.setState({name:''})
  }

  moveEvent = async ({ event, start, end })  => {
      const { events } = this.state

      const id = events.indexOf(event)
      const updatedEvent = { ...event, start:toTime(start), end:toTime(end) }
      const nextEvents = [...events]
      nextEvents.splice(id, 1, updatedEvent);
      await this.setState({
        events: nextEvents,
      })
    }


  slotSelected = ({start,end}) => {
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
        <Banner/>
        <DragAndDropCalendar
          events={this.state.events}
          views={['week']}
          defaultView='week'
          onEventDrop={this.moveEvent}
          startAccessor='start'
          onSelectEvent={event => alert(event.title)}
          endAccessor='end'
          defaultDate={moment().toDate()}
          selectable
          step={60}
          onSelectSlot={this.slotSelected}
          />
        {this.createModal()}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Calendar)
