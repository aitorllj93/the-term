import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetAccountInfo } from './account.actions';

export class AccountStateModel {
  account: Account;
}

@State<AccountStateModel>({
  name: 'account',
  defaults: {
    account: null
  }
})
@Injectable({providedIn: 'root'})
export class AccountState {


  @Selector()
  static account(state: AccountStateModel) {
    return state.account;
  }

  @Action(SetAccountInfo)
  setAccountInfo(
    {
      setState,
      getState
    }: StateContext<AccountStateModel>,
    {
      account
    }: SetAccountInfo
  ) {
    setState({
      account
    });
  }
}
