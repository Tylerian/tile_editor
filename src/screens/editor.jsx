import { useState } from "react"

const tileColors = {
    red: '#f00',
    green: '#0f0',
    blue: '#00f'
}

const Editor = ({
    projectName,
    gameName,
    gameLevel,
}) => {
    const [
        frameSize,
    ] = useState(32)

    const [
        currentColor,
        setCurrentColor,
    ] = useState('red')

    const onClickPicker = (color) => {
        console.log('setting color', color)
        setCurrentColor(color)
    }

    return (
        <div className="absolute h-full w-full flex items-center justify-center bg-gradient-to-tr from-[rgb(82,20,194)] to-[rgb(170,50,200)]">
            <div className="bg-white rounded w-[800px] p-4">
                <div className="space-y-2">
                    <div className="flex items-center justify-center">
                        <span className="font-medium">Editor de Niveles</span>
                    </div>
                    <div className="flex bg-mono-0 border border-mono-1 divide-x divide-mono-1">
                        <div className="flex-1 px-3">
                            <span>Proyecto: {projectName}</span>
                        </div>
                        <div className="flex-1 px-3">
                            <span>Juego: {gameName}</span>
                        </div>
                        <div className="flex-1 px-3">
                            <span>Pantalla: {gameLevel}</span>
                        </div>
                        <div className="flex-1 px-3">
                            <span>Nº de frames: {frameSize}</span>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-3/4">
                            <Grid h={12} w={18} currentColor={currentColor} />
                        </div>
                        <div className="w-1/4">
                            <div className="bg-mono-0 p-4">
                                <div>Frame actual: 1</div>
                                <div className="flex space-x-2">
                                    <button className="flex flex-1 justify-center bg-white border border-mono-1">{'<'}</button>
                                    <button className="flex flex-1 justify-center bg-white border border-mono-1">{'>'}</button>
                                </div>
                            </div>
                            <div className="">
                                <div className="flex items-baseline space-x-1">
                                <div>Colores</div>
                                <div className="w-2 h-2" style={{ backgroundColor: tileColors[currentColor]}} />
                                </div>
                                <div className="space-y-2">
                                    {Object.keys(tileColors).map($0 => <ColorPickerBtn color={$0} onClick={onClickPicker} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Grid = ({
    h,
    w,
    currentColor
}) => {
    const [
        grid
     ] = useState(buildGrid(h, w))

    console.log(grid)

    return (
        <div className="flex flex-col">
            {grid?.map(($0, y) => (<div className="flex">{$0.map(($1, x) => <Tile currentColor={currentColor} x={x} y={y} />)}</div>))}
        </div>
    )
}

const buildGrid = (h, w) => {
    const grid = []

    for (let y = 0; y < h; y++) {
        grid.push([])

        for (let x = 0; x < w; x++) {
            grid[y].push('0')
        }
    }

    return grid
}

const Tile = ({
    x,
    y,
    currentColor,
}) => {
    const [
        tileColor,
        setTileColor,
    ] = useState()

    const onClick = () => {
        const color = tileColors[currentColor]
        setTileColor(color)
    }

    return (
        <div className="w-8 h-8 border border-mono-1 text-2xs flex items-center justify-center cursor-pointer" style={{ backgroundColor: tileColor }} onClick={onClick}>{x},{y}</div>
    )
}

const ColorPickerBtn = ({
    color,
    onClick
}) => {
    const clickCb = () => onClick(color)

    return (
        <button className="w-full h-5 border" onClick={clickCb} style={{ backgroundColor: tileColors[color] }} />
    )
}

export default Editor
