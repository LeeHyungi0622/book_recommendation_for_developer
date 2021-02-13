import React from "react";
import { render, cleanup, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import App from "../Components/App";
// Screen components
import IT from "../Screens/IT";
import Development from "../Screens/Development";
import Search from "../Screens/Search";
import NotFound from "../Screens/NotFound";

// 각 테스트가 끝난뒤에 초기화
afterEach(cleanup);

describe('Routing test in <App /> component', () => {

    // Test case 1
    test('<App /> component가 rendering될 시에 /로 rendering이 되는가?', async() => {
        const { getByText } = render( < App / > );

        await waitFor(() => {
            // toBeInTheDocument는 @testing-library/jest-dom을 import해야만 사용할 수 있다.
            // rendering된 page의 text확인
            expect(getByText(/Computer\/Internet/)).toBeInTheDocument();
        });
    });

    // Test case 2
    test('Navigation Header에 세 개의 menu(it, development, search) link가 존재하는가?', async() => {
        const { getByTestId } = render( < App / > );

        // 화면에 링크가 포함되어있는지 확인
        const navbar = getByTestId('navbar');
        const itLink = getByTestId('it');
        const devLink = getByTestId('development');
        const searchLink = getByTestId('search');

        await waitFor(() => {
            expect(navbar).toContainElement(itLink);
            expect(navbar).toContainElement(devLink);
            expect(navbar).toContainElement(searchLink);
        })
    })

    // Test case 3
    test('IT menu를 클릭시, IT component가 화면에 rendering되는가?', async() => {
        const { getByTestId, getByText } = render( < App / > );

        fireEvent.click(getByTestId('it'));

        await waitFor(() => {
            // 화면에 it component의 wrapper class가 있는지 확인
            expect(getByTestId('it-wrapper')).toBeInTheDocument();
        });
    });

    // Test case 3-1
    test('Development menu 클릭시, Development component가 화면에 rendering되는가?', async() => {
        const { getByTestId } = render( < App / > );

        fireEvent.click(getByTestId('development'));

        await waitFor(() => {
            //화면에 development component의 wrapper class가 있는지 확인
            expect(getByTestId('development-wrapper')).toBeInTheDocument();
        });
    });

    // Test case 3-2
    test('Search menu 클릭시, Search component가 화면에 rendering되는가?', async() => {
        const { getByTestId } = render( < App / > );

        fireEvent.click(getByTestId('search'));

        await waitFor(() => {
            //화면에 search component의 wrapper class가 있는지 확인
            expect(getByTestId('search-wrapper')).toBeInTheDocument();
        })
    })

    // Test case 4
    test('Route에 해당되는 path가 없는 경우, NotFound component로 rendering이 되는가?', async() => {
        const history = createMemoryHistory();
        history.push('/not/found');

        const { getByTestId } = render(
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={IT}/>
                    <Route path="/development" component={Development}/>
                    <Route path="/search" component={Search}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        );

        await waitFor(() => {
            expect(getByTestId('404-notfound-wrapper')).toBeInTheDocument();
        });
    })
})