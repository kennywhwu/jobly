import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Companies from './Companies';
import JobCard from './JobCard';
import Jobs from './Jobs';
import Search from './Search';

// Smoke test
it('renders shallowly without crashing', function() {
  shallow(<App />);
});

it('renders with routes without crashing', function() {
  mount(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
});

it('renders Companies and Search components when going to /companies', function() {
  let wrapper = mount(
    <MemoryRouter initialEntries={['/companies']}>
      <App />
    </MemoryRouter>
  );

  let elem = wrapper.children();
  console.log('elem', elem.debug());
  expect(elem.matchesElement(<Companies />)).toBe(true);
  expect(elem.matchesElement(<Search />));
});
it('renders JobCard component when going to /companies/:handle', function() {
  let wrapper = mount(
    <MemoryRouter initialEntries={['/companies/baker-santos']}>
      <App />
    </MemoryRouter>
  );

  let elem = wrapper.find('div').first();
  expect(elem.matchesElement(<JobCard />));
});

it('renders Jobs and Search components when going to /jobs', function() {
  let wrapper = mount(
    <MemoryRouter initialEntries={['/jobs']}>
      <App />
    </MemoryRouter>
  );

  let elem = wrapper.find('div').first();
  expect(elem.matchesElement(<Jobs />));
  expect(elem.matchesElement(<Search />));
});
