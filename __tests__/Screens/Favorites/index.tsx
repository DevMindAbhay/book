import { useIsFocused } from '@react-navigation/native'
import { render } from '@testing-library/react-native'
import React from 'react'
import 'react-native-gesture-handler/jestSetup'
import * as redux from 'react-redux'
import { act } from 'react-test-renderer'
import Favorite from 'screens/Favorite/index'
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
    test('Snapshot ', () => {
        let getPercentageHeight = jest.fn()
        getPercentageHeight.mockReturnValue(100)

        let getPercentageWidth = jest.fn()
        getPercentageWidth.mockReturnValue(jest.fn())

        let isFocused = jest.fn()
        let useIsFocused = jest.fn()
        useIsFocused.mockReturnValue(isFocused)

        act(() => {
            const state = {
                loadingReducer: { isLoading: true },
                appReducer: { favorite: 'as' },
            }
            jest.spyOn(redux, 'useSelector').mockImplementation((val) => {
                val(state)
                expect(tree).toMatchSnapshot()
            })
        })
        const tree = render(<Favorite />)
    })

    test('set loading as false ', () => {
        let getPercentageHeight = jest.fn()
        getPercentageHeight.mockReturnValue(100)

        let getPercentageWidth = jest.fn()
        getPercentageWidth.mockReturnValue(jest.fn())

        let isFocused = jest.fn()
        let useIsFocused = jest.fn()
        useIsFocused.mockReturnValue(isFocused)
       

        act(() => {
            const state = {
                loadingReducer: { isLoading: false },
                appReducer: { favorite: 'as' },
            }
            jest.spyOn(redux, 'useSelector').mockImplementation((val) => {
                val(state)
                expect(tree).toMatchSnapshot()
            })
        })
        const tree = render(<Favorite />)
    })
})
