import { useIsFocused } from '@react-navigation/native'
import { render } from '@testing-library/react-native'
import React from 'react'
import 'react-native-gesture-handler/jestSetup'
import Shimmer from 'screens/Explore/Shimmer'
import { getPercentageHeight, getPercentageWidth } from 'utils/dimentionUtil'

const DeviceTypeUtilsMock = jest.requireMock('utils/dimentionUtil')

jest.mock('./../../../app/utils/dimentionUtil', () => {
    return {
        getPercentageHeight: jest.fn(),
        height: '100',
        getPercentageWidth: jest.fn(),
    }
})

describe('Screen test', () => {
    test('Snapshot with loading as true ', () => {
        let getPercentageHeight = jest.fn()
        getPercentageHeight.mockReturnValue(100)

        let getPercentageWidth = jest.fn()
        getPercentageWidth.mockReturnValue(jest.fn())

        let isFocused = jest.fn()
        let useIsFocused = jest.fn()
        useIsFocused.mockReturnValue(isFocused)

        const tree = render(<Shimmer />)
    })
})
