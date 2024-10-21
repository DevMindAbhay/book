import { useIsFocused } from '@react-navigation/native'
import { render } from '@testing-library/react-native'
import React from 'react'
import 'react-native-gesture-handler/jestSetup'
import * as redux from 'react-redux'
import { act } from 'react-test-renderer'
import ExploreComponent from 'screens/Explore/Container'
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

        act(() => {
            const state = {
                loadingReducer: { isLoading: false },
                loginReducer: { user: 'as' },
                appReducer: {
                    books: [
                        { averageRating: 2 },
                        { averageRating: 4 },
                        { averageRating: 5 },
                        { averageRating: 1 },
                        { averageRating: 3 },
                    ],
                },
            }
            jest.spyOn(redux, 'useSelector').mockImplementation((val) => {
                val(state)
                expect(tree).toMatchSnapshot()
            })
        })
        let isFocused = jest.fn()
        let useIsFocused = jest.fn()
        useIsFocused.mockReturnValue(isFocused)

        const tree = render(<ExploreComponent onRefresh={handleRefresh} />)

        function handleRefresh() {
            // Implement the logic for refreshing the component's data
            console.log('Refreshing component')
        }
    })
})
