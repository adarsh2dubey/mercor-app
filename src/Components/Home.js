import React, { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import './styles/Home.css';
import { MdOutlineModeEdit } from 'react-icons/md';
import { CiFilter } from 'react-icons/ci';
import { BsLink } from 'react-icons/bs';
import { BsCalendarDate } from 'react-icons/bs';
import { BsThreeDots } from 'react-icons/bs';
import { IoIosAdd } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlineGroupAdd } from 'react-icons/md';
import { HiOutlineBars2 } from 'react-icons/hi2';
import { AiOutlineAppstore } from 'react-icons/ai';
import { AiOutlineFile } from 'react-icons/ai';
import { RxDividerVertical } from 'react-icons/rx';
import { RiAddBoxLine } from 'react-icons/ri';
import { BsDot } from 'react-icons/bs';
import { BsChatRightDots } from 'react-icons/bs';

import p1 from './images/avatar1.png';
import p2 from './images/avatar2.png';
import p3 from './images/avatar3.png';
import p4 from './images/avatar4.png';
import p5 from './images/avatar5.png';

import i1 from './images/Onprogress1.png';
import i2 from './images/Onprogress2.png';
import i3 from './images/Onprogress3.png';

import doneImg from './images/done.png';

import Avatar from 'react-avatar';

const Home = () => {
  const [todo, settodo] = useState([]);
  const [onprogress, setonprogress] = useState([]);
  const [done, setdone] = useState([]);
  useEffect(() => {
    const ttodo = [
      {
        id:"0",
        quality: "Low",
        title: "Brainstorming",
        avatar: [
          { name: 'John Doe', src: p1 },
          { name: 'Jane Smith', src: p3 },
          { name: 'Alex Johnson', src: p4 },
        ],
        img: [
        ],
        details: "User research helps you to create an optimal product for users.",
        comments: "12",
        files: "0"
      },
      {
        id:"1",
        quality: "High",
        title: "Research",
        avatar: [
          { name: 'John Doe', src: p2 },
          { name: 'Jane Smith', src: p5 },
        ],
        img: [
        ],
        details: "Brainstorming brings team members' diverse experience into play. ",
        comments: "10",
        files: "3"
      },
      {
        id:"2",
        quality: "High",
        title: "Wireframes",
        avatar: [
          { name: 'John Doe', src: p2 },
          { name: 'Jane Smith', src: p5 },
          { name: 'Alex Johnson', src: p4 },
        ],
        img: [
        ],
        details: "Low fidelity wireframes include the most basic content and visuals.",
        comments: "8",
        files: "1"
      }
    ]
    settodo(ttodo);
    const tonprogress = [
      {
        id:"0",
        quality: "Low",
        title: "Onboarding Illustrations",
        avatar: [
          { name: 'John Doe', src: p3 },
          { name: 'Jane Smith', src: p4 },
          { name: 'Jane Miuck', src: p1 },
        ],
        img: [
          { src: i1 }
        ],
        details: "",
        comments: "14",
        files: "15"
      },
      {
        id:"1",
        quality: "Low",
        title: "Moodboard",
        avatar: [
          { name: 'John Doe', src: p3 },
        ],
        img: [
          { src: i2 },
          { src: i3 }
        ],
        details: "",
        comments: "9",
        files: "10"
      }


    ]
    setonprogress(tonprogress);
    const tdone = [
      {
        id:"0",
        quality: "Completed",
        title: "Mobile App Design",
        avatar: [
          { name: 'John Doe', src: p2 },
          { name: 'Jane Smith', src: p4 }
        ],
        img: [
          { src: doneImg }
        ],
        details: "",
        comments: "12",
        files: "15"
      },
      {
        id:"1",
        quality: "Completed",
        title: "Design System",
        avatar: [
          { name: 'John Doe', src: p1 },
          { name: 'John Doe', src: p3 },
          { name: 'John Doe', src: p4 },
        ],
        img: [
        ],
        details: "It just needs to adapt the UI from what you did before ",
        comments: "12",
        files: "15"
      }

    ]
    setdone(tdone);
  },[])
  const handleDragEnd = (result) => {
    const { source, destination } = result;
  
    // Check if the item was dropped outside of a droppable area
    if (!destination) {
      return;
    }
  
    // Check if the item was dropped in a different droppable
    if (source.droppableId !== destination.droppableId) {
      // Logic to handle moving an item from one droppable to another
      if (source.droppableId === 'todo-droppable') {
        // Item was dragged from the "TO DO" column
        const draggedItem = todo[source.index];
  
        // Remove the dragged item from the "TO DO" array
        const newTodo = [...todo];
        newTodo.splice(source.index, 1);
  
        // Insert the dragged item into the new location in the destination droppable
        if (destination.droppableId === 'onprogress-droppable') {
          // Item was dropped in the "On Progress" column
          const newOnProgress = [...onprogress];
          newOnProgress.splice(destination.index, 0, draggedItem);
          settodo(newTodo);
          setonprogress(newOnProgress);
        } else if (destination.droppableId === 'done-droppable') {
          // Item was dropped in the "Done" column
          const newDone = [...done];
          newDone.splice(destination.index, 0, draggedItem);
  
          settodo(newTodo);
          setdone(newDone);
        }
      } else if (source.droppableId === 'onprogress-droppable') {
        // Item was dragged from the "On Progress" column
        const draggedItem = onprogress[source.index];
  
        // Remove the dragged item from the "On Progress" array
        const newOnProgress = [...onprogress];
        newOnProgress.splice(source.index, 1);
  
        // Insert the dragged item into the new location in the destination droppable
        if (destination.droppableId === 'todo-droppable') {
          // Item was dropped in the "TO DO" column
          const newTodo = [...todo];
          newTodo.splice(destination.index, 0, draggedItem);
  
          setonprogress(newOnProgress);
          settodo(newTodo);
        } else if (destination.droppableId === 'done-droppable') {
          // Item was dropped in the "Done" column
          const newDone = [...done];
          newDone.splice(destination.index, 0, draggedItem);
  
          setonprogress(newOnProgress);
          setdone(newDone);
        }
      } else if (source.droppableId === 'done-droppable') {
        // Item was dragged from the "Done" column
        const draggedItem = done[source.index];
  
        // Remove the dragged item from the "Done" array
        const newDone = [...done];
        newDone.splice(source.index, 1);
  
        // Insert the dragged item into the new location in the destination droppable
        if (destination.droppableId === 'todo-droppable') {
          // Item was dropped in the "TO DO" column
          const newTodo = [...todo];
          newTodo.splice(destination.index, 0, draggedItem);
  
          setdone(newDone);
          settodo(newTodo);
        } else if (destination.droppableId === 'onprogress-droppable') {
          // Item was dropped in the "On Progress" column
          const newOnProgress = [...onprogress];
          newOnProgress.splice(destination.index, 0, draggedItem);
  
          setdone(newDone);
          setonprogress(newOnProgress);
        }
      }
    } else {
      // Logic to handle reordering an item within the same droppable
      if (source.droppableId === 'todo-droppable') {
        // Item was reordered in the "TO DO" column
        const newTodo = [...todo];
        const [draggedItem] = newTodo.splice(source.index, 1);
        newTodo.splice(destination.index, 0, draggedItem);
        settodo(newTodo);
      } else if (source.droppableId === 'onprogress-droppable') {
        // Item was reordered in the "On Progress" column
        const newOnProgress = [...onprogress];
        const [draggedItem] = newOnProgress.splice(source.index, 1);
        newOnProgress.splice(destination.index, 0, draggedItem);
        setonprogress(newOnProgress);
      } else if (source.droppableId === 'done-droppable') {
        // Item was reordered in the "Done" column
        const newDone = [...done];
        const [draggedItem] = newDone.splice(source.index, 1);
        newDone.splice(destination.index, 0, draggedItem);
        setdone(newDone);
      }
    }
  
    // Update the state or perform any necessary actions after the drag and drop operation
    // ...
  };
  
  




  const avatarData = [
    { name: 'John Doe', src: p1 },
    { name: 'Jane Smith', src: p2 },
    { name: 'Alex Johnson', src: p3 },
    { name: 'Alex Johnson', src: p4 },
    { name: '+ 2', src: "not available" },
  ];

  return (
    <div class="my-2 p-lg-4 p-md-1 p-sm-1 maindiv">
      <div style={{ marginLeft: "0", marginRight: "0" }} className="row justify-content-between">
        <div className="col-sm-12 col-md-7 col-lg-6">
          <div className="row">

            <h3 class="heading">Mobile App <span> <MdOutlineModeEdit class="iconsInHome" size={20} /> <BsLink class="iconsInHome" size={20} /> </span></h3>

          </div>
        </div>
        <div className="col-sm-12 col-md-5  col-lg-6">
          <div class="my-auto me-2 d-flex avatarMargin justify-content-end">
            <p style={{ padding: "10px", position: "relative", left: "30px", color: "#5030E5", fontFamily: 'Inter', fontStyle: "normal", fontWeight: "600", fontSize: "16px" }} class="my-auto text-end"> <span><IoIosAdd class="iconsInHome" size={20} /></span> Invite</p>
            {avatarData.map((avatar, index) => (
              <Avatar
                key={index}
                name={avatar.name}
                src={avatar.src}
                size="40"
                round={true}
                className={`avatar-item avatar-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "0", marginRight: "0" }} className="row my-4 justify-content-between">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div style={{ marginLeft: "0", marginRight: "0" }} className="row">

            <div class="box mx-3 "> <CiFilter /> <span>Filter</span> <IoIosArrowDown />    </div>
            <div class="box mx-1 "> <BsCalendarDate size={15} /> <span>Today  </span> <IoIosArrowDown />    </div>
          </div>


        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 my-1">
          <div className="row me-2 avatarMargin justify-content-end">

            <div style={{ width: "80px" }} class="box"> <MdOutlineGroupAdd /> <span>Share</span>    </div>
            <div style={{ width: "30px", border: 'none', color: "#787486" }} class="box "> <RxDividerVertical size={27} />     </div>

            <div style={{ width: "30px", backgroundColor: "#5030E5", color: "white" }} class="box "> <HiOutlineBars2 size={15} />     </div>
            <div style={{ width: "30px", border: 'none', color: "#787486" }} class="box "> <AiOutlineAppstore size={27} />     </div>
          </div>


        </div>
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
      <div style={{ marginLeft: "0", marginRight: "0" }} className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 p-2">
          <div className="contentBox p-2">
            <div className="d-flex mt-2 me-2 justify-content-between">
              <p style={{ fontSize: "16px" }} id="myproject">
                <BsDot style={{ color: "#5030E5" }} size={30} /> TO DO
              </p>
              <div>
                <RiAddBoxLine size={15} />
              </div>
            </div>
            <div
              style={{ width: "95%", height: "3px", backgroundColor: "#5030E5" }}
              className="row mx-auto"
            ></div>
            <div className="row my-2">
              <div className="col">
                <Droppable droppableId="todo-droppable">
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {todo.map((data, index) => (
                        <Draggable
                          key={data.id}
                          draggableId={data.title}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              {/* Your draggable component */}
                              <div class="todobox p-2 my-2">
                                    <div className="d-flex mt-2 me-2 justify-content-between">
                                      <p id="quality">{data.quality}</p>
                                      <div><BsThreeDots size={15} /> </div>

                                    </div>
                                    <h3 id="titleoftodoBox">
                                      {data.title}
                                    </h3>
                                    <div class="my-2 mx-auto">
                          {data.img.map((img, index) => (
                            <img
                              style={{ margin: "1px 4px" }}
                              src={img.src}
                              alt="image"
                            />

                          ))}
                        </div>
                                    <p id="parainTodobox">{data.details}</p>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        {data.avatar.map((avatar, index) => (
                                          <Avatar
                                            key={index}
                                            name={avatar.name}
                                            src={avatar.src}
                                            size="25"
                                            round={true}

                                          />

                                        ))}
                                      </div>
                                      <div>
                                        <span style={{ fontSize: "12px" }}>
                                          <BsChatRightDots /> {data.comments} comments
                                        </span>
                                        <span style={{ fontSize: "12px", marginLeft: "5px" }}>
                                          <AiOutlineFile /> {data.files}  files
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-2">
          <div className="contentBox p-2">
            <div className="d-flex mt-2 me-2 justify-content-between">
              <p style={{ fontSize: "16px" }} className="text-capitalize" id="myproject">
                <BsDot style={{ color: "#FFA500" }} size={30} /> On Progress
              </p>
              <div>
                <RiAddBoxLine size={15} />
              </div>
            </div>
            <div
              style={{ width: "95%", height: "3px", backgroundColor: "#FFA500" }}
              className="row mx-auto"
            ></div>
            <div className="row my-2">
              <div className="col">
                <Droppable droppableId="onprogress-droppable">
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {onprogress.map((data, index) => (
                        <Draggable
                          key={data.id}
                          draggableId={data.title}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                             <div class="todobox p-2 my-2">
                        <div className="d-flex mt-2 me-2 justify-content-between">
                          <p id="quality">{data.quality}</p>
                          <div><BsThreeDots size={15} /> </div>

                        </div>
                        <h3 id="titleoftodoBox">
                          {data.title}
                        </h3>
                        <p id="parainTodobox">{data.details}</p>
                          <div className="my-2 mx-auto" style={{ display: "flex", justifyContent: "center" }}>
  {data.img.map((img, index) => (
    <img
      style={{ margin: "1px 4px" }}
      src={img.src}
      alt="image"
    />
  ))}
</div>
                        <div className="d-flex justify-content-between">
                          <div>
                            {data.avatar.map((avatar, index) => (
                              <Avatar
                                key={index}
                                name={avatar.name}
                                src={avatar.src}
                                size="25"
                                round={true}

                              />

                            ))}
                          </div>

                          <div>
                            <span style={{ fontSize: "12px" }}>
                              <BsChatRightDots /> {data.comments} comments
                            </span>
                            <span style={{ fontSize: "12px", marginLeft: "5px" }}>
                              <AiOutlineFile /> {data.files}  files
                            </span>
                          </div>
                        </div>
                      </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 col-md-6 p-2">
          <div className="contentBox p-2">
            <div className="d-flex mt-2 me-2 justify-content-between">
              <p style={{ fontSize: "16px" }} className="text-capitalize" id="myproject">
                <BsDot style={{ color: "#8BC48A" }} size={30} /> Done
              </p>
              <div>
                <RiAddBoxLine size={15} />
              </div>
            </div>
            <div
              style={{ width: "95%", height: "3px", backgroundColor: "#8BC48A" }}
              className="row mx-auto"
            ></div>
            <div className="row my-2">
              <div className="col">
                <Droppable droppableId="done-droppable">
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {done.map((data, index) => (
                        <Draggable
                          key={data.id}
                          draggableId={data.title}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                           <div class="todobox p-2 my-2">
                        <div className="d-flex mt-2 me-2 justify-content-between">
                          <p id="qualityCom">{data.quality}</p>
                          <div><BsThreeDots size={15} /> </div>

                        </div>
                        <h3 id="titleoftodoBox">
                          {data.title}
                        </h3>
                        <p id="parainTodobox">{data.details}</p>
                        <div className="my-2 mx-auto" style={{ display: "flex", justifyContent: "center" }}>
  {data.img.map((img, index) => (
    <img
      style={{ margin: "1px 4px" }}
      src={img.src}
      alt="image"
    />
  ))}
</div>
                        <div className="d-flex justify-content-between">
                          <div>
                            {data.avatar.map((avatar, index) => (
                              <Avatar
                                key={index}
                                name={avatar.name}
                                src={avatar.src}
                                size="25"
                                round={true}

                              />

                            ))}
                          </div>

                          <div>
                            <span style={{ fontSize: "12px" }}>
                              <BsChatRightDots /> {data.comments} comments
                            </span>
                            <span style={{ fontSize: "12px", marginLeft: "5px" }}>
                              <AiOutlineFile /> {data.files}  files
                            </span>
                          </div>
                        </div>
                      </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DragDropContext>
        {/* <div style={{ marginLeft: "0", marginRight: "0" }} className="row">

          <div className="col-lg-4 col-md-6 col-sm-12 p-2">
            <div className=" contentBox p-2" >

              <div className="d-flex mt-2 me-2 justify-content-between">
                <p style={{ fontSize: "16px" }} id="myproject"><BsDot style={{ color: "#5030E5" }} size={30} /> TO DO</p>

                <div ><RiAddBoxLine size={15} /> </div>

              </div>
              <div style={{ width: "95%", height: "3px", backgroundColor: "#5030E5" }} className="row mx-auto"></div>
              <div className="row my-2">
                <div className="col">

                        
                        {
                          todo.map((data, index) => (
                  
                            <div class="todobox p-2 my-2">
                                    <div className="d-flex mt-2 me-2 justify-content-between">
                                      <p id="quality">{data.quality}</p>
                                      <div><BsThreeDots size={15} /> </div>

                                    </div>
                                    <h3 id="titleoftodoBox">
                                      {data.title}
                                    </h3>
                                    <p id="parainTodobox">{data.details}</p>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        {data.avatar.map((avatar, index) => (
                                          <Avatar
                                            key={index}
                                            name={avatar.name}
                                            src={avatar.src}
                                            size="25"
                                            round={true}

                                          />

                                        ))}
                                      </div>
                                      <div>
                                        <span style={{ fontSize: "12px" }}>
                                          <BsChatRightDots /> {data.comments} comments
                                        </span>
                                        <span style={{ fontSize: "12px", marginLeft: "5px" }}>
                                          <AiOutlineFile /> {data.files}  files
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                          ) )}
                            

                    
                  

                </div>
              </div>

            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 p-2">
            <div className=" contentBox p-2" >
              <div className="d-flex mt-2 me-2 justify-content-between">



                <p style={{ fontSize: "16px" }} class="text-capitalize" id="myproject"><BsDot style={{ color: "#FFA500" }} size={30} /> On Progress</p>

                <div ><RiAddBoxLine size={15} /> </div>

              </div>
              <div style={{ width: "95%", height: "3px", backgroundColor: "#FFA500" }} className="row mx-auto"></div>

              <div className="row my-2">
                <div className="col">
                  {
                    onprogress.map((data, index) => (
                      <div class="todobox p-2 my-2">
                        <div className="d-flex mt-2 me-2 justify-content-between">
                          <p id="quality">{data.quality}</p>
                          <div><BsThreeDots size={15} /> </div>

                        </div>
                        <h3 id="titleoftodoBox">
                          {data.title}
                        </h3>
                        <p id="parainTodobox">{data.details}</p>
                        <div class="my-2 mx-auto">
                          {data.img.map((img, index) => (
                            <img
                              style={{ margin: "1px 4px" }}
                              src={img.src}
                              alt="image"
                            />

                          ))}
                        </div>
                        <div className="d-flex justify-content-between">
                          <div>
                            {data.avatar.map((avatar, index) => (
                              <Avatar
                                key={index}
                                name={avatar.name}
                                src={avatar.src}
                                size="25"
                                round={true}

                              />

                            ))}
                          </div>

                          <div>
                            <span style={{ fontSize: "12px" }}>
                              <BsChatRightDots /> {data.comments} comments
                            </span>
                            <span style={{ fontSize: "12px", marginLeft: "5px" }}>
                              <AiOutlineFile /> {data.files}  files
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                    )
                  }
                </div>
              </div>



            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-6  p-2">
            <div className="contentBox p-2" >
              <div className="d-flex mt-2 me-2 justify-content-between">

                <p style={{ fontSize: "16px" }} class="text-capitalize" id="myproject"><BsDot style={{ color: "#8BC48A" }} size={30} /> Done</p>

                <div ><RiAddBoxLine size={15} /> </div>

              </div>
              <div style={{ width: "95%", height: "3px", backgroundColor: "#8BC48A" }} className="row mx-auto"></div>


              <div className="row my-2">
                <div className="col">
                  {
                    done.map((data, index) => (
                      <div class="todobox p-2 my-2">
                        <div className="d-flex mt-2 me-2 justify-content-between">
                          <p id="qualityCom">{data.quality}</p>
                          <div><BsThreeDots size={15} /> </div>

                        </div>
                        <h3 id="titleoftodoBox">
                          {data.title}
                        </h3>
                        <p id="parainTodobox">{data.details}</p>
                        <div class="my-2 px-auto mx-auto">
                          {data.img.map((img, index) => (
                            <div class="row justify-content-center">
                              <img
                                style={{ margin: "1px auto" }}
                                src={img.src}
                                alt="image"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="d-flex justify-content-between">
                          <div>
                            {data.avatar.map((avatar, index) => (
                              <Avatar
                                key={index}
                                name={avatar.name}
                                src={avatar.src}
                                size="25"
                                round={true}

                              />

                            ))}
                          </div>

                          <div>
                            <span style={{ fontSize: "12px" }}>
                              <BsChatRightDots /> {data.comments} comments
                            </span>
                            <span style={{ fontSize: "12px", marginLeft: "5px" }}>
                              <AiOutlineFile /> {data.files}  files
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                    )
                  }
                </div>
              </div>
            </div>
          </div>


        </div> */}
    </div>

  )
}
export default Home;
