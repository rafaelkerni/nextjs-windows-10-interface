import { useEffect, useState, ReactNode } from 'react'

import Image from 'next/image'

import {
  Box,
  Grid,
  Drawer,
  AppBar,
  ClickAwayListener
} from '@mui/material'
import { styled } from '@mui/material/styles'

import { useSelector, useDispatch } from 'react-redux'

// eslint-disable-next-line @emotion/no-vanilla
import { css, cx } from '@emotion/css'
import {
  DragDropContext,
  Droppable,
  Draggable
} from 'react-beautiful-dnd'
import { FaWindows } from 'react-icons/fa'

//importa o hook
import useRedux from '@/hooks/useRedux'

const finalApps = [
  {
    id: 'lixeira',
    name: 'Lixeira',
    thumb: '/Recycle_Bin_Empty.ico'
  },
  {
    id: 'chrome',
    name: 'Google Chrome',
    thumb: '/chrome.png'
  }
]

const Desktop = () => {
  const [apps, updateApps] = useState(finalApps)
  const { setState } = useRedux('startbutton', useDispatch())
  const data = useSelector(state => state.data)

  function handleOnDragEnd(result) {
    if (!result.destination) return

    const items = Array.from(apps)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    updateApps(items)
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable
        droppableId="apps"
        style={{
          height: '100vh',
          backgroundColor: 'red'
        }}
      >
        {provided => (
          <div
            className="apps"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {apps.map(({ id, name, thumb }, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {provided => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {' '}
                      <Grid
                        container
                        display="flex"
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        style={{ height: 120, width: 50 }}
                      >
                        <Image
                          src={thumb}
                          alt={`${name} Thumb`}
                          width={50}
                          height={50}
                        />
                        <p
                          style={{
                            fontSize: 12,
                            color: 'white',
                            textShadow: '1px 1px 1px rgba(0, 0, 0, 1)'
                          }}
                        >
                          {name}
                        </p>
                      </Grid>
                    </div>
                  )}
                </Draggable>
              )
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default Desktop
