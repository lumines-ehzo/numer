import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'RootOfEquation',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Bisection',
        path: '/bisection_method',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'FalsePosition',
        path: '/falseposition',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'NewtonRaphson',
        path: '/newtonraphson',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'OnePointIteration',
        path: '/onepointiteration',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Secant',
        path: '/secant',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Matrix',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Cramer',
        path: '/cramer',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Gauss Elimination',
        path: '/gausselimination',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Gauss Jordan',
        path: '/gaussjordan',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Lu Decomposition',
        path: '/lu_decomposition',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Jacobi iteration',
        path: '/jacobi',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Gauss Seidel',
        path: '/gauss_seidel',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Conjugate Gradient',
        path: '/conjugate_gradient',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Interpulation',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Newton Interpulation',
        path: '/polynomial',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Lagrange Interpulation',
        path: '/lagrange',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Cubic-Spline',
        path: '/cubic_spline',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Linear Regression',
        path: '/linearregression',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Polynomial Regression',
        path: '/polynomial_regression',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];