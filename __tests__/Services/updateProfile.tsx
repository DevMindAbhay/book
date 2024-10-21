import updateProfile from './../../app/services/updateProfile'

test('Add book to favrites test', () => {
    let response = updateProfile({ firstName: 'harsh', lastName: 'kumar' })
    expect(response).not.toBeNull()
})
