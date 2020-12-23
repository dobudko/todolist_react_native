import UserType from '../types/UserType'

export interface loginRequestAction {
  type: string
  payload: {
    login: string
    password: string
  }
}

export interface userAction {
  type: string
  payload?: {
    accessToken: string
    refreshToken: string
    login: string
  }
}

export interface sharingAvailableUserAction {
  type: string
  payload: Array<UserType> | string
}

export interface ListsType {
  id: string
  title: string
  userId: string
}

export interface ListsAction {
  type: string
  payload?: ListsType | ListsType[] | string
}

export interface SharedLists {
  id?: string
  userId: string
  listId: string
}

export interface SharedListsAction {
  type: string
  payload?: SharedLists | SharedLists[]
}

export interface AvailableListsType {
  lists: ListsType[]
  sharedLists: SharedLists[]
}

export interface clearCompletedAction {
  type: string
  payload: { id: string }
}
