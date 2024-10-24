import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import * as tts from 'react-native-tts'
import 'react-native-gesture-handler/jestSetup'
import Container from 'screens/BookDetail/Container'
import { getPercentageHeight, getPercentageWidth } from 'utils/dimentionUtil'

const DeviceTypeUtilsMock = jest.requireMock('utils/dimentionUtil')

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('./../../../app/utils/dimentionUtil', () => {
    return {
        getPercentageHeight: jest.fn(),
        height: 100,
        getPercentageWidth: jest.fn(),
    }
})

describe('Component testing', () => {
    test('Snapshot ', () => {
    const getPercentageHeight = jest.fn();
    const getPercentageWidth = jest.fn();

    getPercentageHeight.mockReturnValue(jest.fn()); 
    getPercentageWidth.mockReturnValue(jest.fn());

        getPercentageWidth.mockReturnValue(jest.fn())
        const tree = render(<Container books={['abc']} base_url="abc.com" />)
       
        expect(tree).toMatchSnapshot()
    })

    test('Fire toggle text ', () => {
        const getPercentageHeight = jest.fn();
    const getPercentageWidth = jest.fn();

    getPercentageHeight.mockReturnValue(jest.fn()); 
    getPercentageWidth.mockReturnValue(jest.fn());
       
        const { getByTestId } = render(<Container />)
        fireEvent.press(getByTestId('toggle'))
    })

    test('Fire toggle text ', () => {
        const getPercentageHeight = jest.fn();
        const getPercentageWidth = jest.fn();
    
        getPercentageHeight.mockReturnValue(jest.fn()); 
        getPercentageWidth.mockReturnValue(jest.fn());
       

        const { getByTestId } = render(<Container />)
        fireEvent.press(getByTestId('navigate'))
    })

    test('Fire toggle text ', () => {
        const getPercentageHeight = jest.fn();
        const getPercentageWidth = jest.fn();
    
        getPercentageHeight.mockReturnValue(jest.fn()); 
        getPercentageWidth.mockReturnValue(jest.fn());
        const stop = jest.fn()
       
        const { getByTestId } = render(<Container />)
       
         fireEvent.press(getByTestId('play'))
       
    })
})
