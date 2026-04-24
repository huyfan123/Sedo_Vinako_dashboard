import React, {useState} from 'react'
import { Input, Menu, Button, Table, ConfigProvider, Grid, Modal, Form, Select, Switch, Dropdown, Popconfirm, message } from 'antd';
import type { GetProps, TableColumnsType, TableProps, MenuProps  } from 'antd';
import {ExclamationCircleOutlined} from '@ant-design/icons';
import { createStyles } from 'antd-style';

import sensor from '../../../assets/sensor.png'
import gateway from '../../../assets/router.png'

type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input;
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('default', '1', <img src={sensor} alt='area' style={{ width: 18, height: 18 }} />),
  getItem('EP485EWG', '2', <img src={gateway} alt='machine' style={{ width: 18, height: 18 }} />),
  getItem('ORC Gateway', '3', <img src={gateway} alt='device' style={{ width: 18, height: 18 }} />),
  getItem('Electric Energy', '4', <img src={sensor} alt='sensor' style={{ width: 18, height: 18 }} />),
  getItem('Level', '5', <img src={sensor} alt='sensor' style={{ width: 18, height: 18 }} />),
  getItem('Temperature', '6', <img src={sensor} alt='sensor' style={{ width: 18, height: 18 }} />),
  getItem('Counter', '7', <img src={sensor} alt='sensor' style={{ width: 18, height: 18 }} />),
  getItem('Gas', '8', <img src={sensor} alt='sensor' style={{ width: 18, height: 18 }} />),
  getItem('OEE Gateway', '9', <img src={gateway} alt='gateway' style={{ width: 18, height: 18 }} />),
  getItem('OEE Gateway', '10', <img src={gateway} alt='gateway' style={{ width: 18, height: 18 }} />),
  getItem('OEE Gateway', '11', <img src={gateway} alt='gateway' style={{ width: 18, height: 18 }} />),
  getItem('OEE Gateway', '12', <img src={gateway} alt='gateway' style={{ width: 18, height: 18 }} />),
  getItem('OEE Gateway', '13', <img src={gateway} alt='gateway' style={{ width: 18, height: 18 }} />),
  getItem('OEE Gateway', '14', <img src={gateway} alt='gateway' style={{ width: 18, height: 18 }} />),
  getItem('OEE Gateway', '15', <img src={gateway} alt='gateway' style={{ width: 18, height: 18 }} />),
];


const useStyle = createStyles(({ css }) => {
  return {
    customTable: css`
      .ant-table {
        .ant-table-container {
          .ant-table-body,
          .ant-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
          }
        }
      }
        .ant-table{
          padding: 6px !important;
        }
        .ant-table-container{
          border: 2px solid gray !important;
        }
      .ant-table-pagination {
        display: flex !important;
        flex-wrap: wrap !important;
        justify-content: space-between !important;
        align-items: center !important;
        width: 100% !important;
        margin-top: 0px !important;
        border-top: 2px solid #BBCFEE !important;
        padding-top: 6px !important;
        gap: 12px !important;
      }
      .ant-pagination-total-text {
        order: -1 !important;
        margin-right: auto !important;
        margin-left: 0 !important;
        padding-left: 6px !important;
      }
      .ant-pagination {
        display: flex !important;
        flex-wrap: wrap !important;
        gap: 8px !important;
      }
    `,
    responsiveMenu: css`
      @media (max-width: 1023px) {
        overflow-x: auto;
        
        &::-webkit-scrollbar {
          height: 4px;
        }
        &::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 4px;
        }

        .ant-menu-item::after {
          display: none !important;
        }
        .ant-menu-item-selected {
          border-bottom: 2px solid #1777FF;
          border-radius: 8px 8px 0 0 !important;
        }
          
      }
    `,
    thinScrollbar: css`
      scrollbar-width: thin;
      scrollbar-color: #eaeaea transparent;
      &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #eaeaea;
        border-radius: 4px;
      }
      &::-webkit-scrollbar-track {
        background-color: transparent;
      }
    `,
  };
});

interface DataType {
  key: string;
  status: boolean;
  name: string;
  type: string;
  creationDate: string;
}



const data = [
  {
    "key": "dev-001",
    "status": true,
    "name": "COUNTER-PAPER_CUTTING-7",
    "type": "Counter",
    "creationDate": "2025-11-25T04:58:52Z"
  },
  {
    "key": "dev-002",
    "status": false,
    "name": "COUNTER-PAPER_CUTTING-1",
    "type": "Counter",
    "creationDate": "2025-11-25T04:59:08Z"
  },
  {
    "key": "dev-003",
    "status": false,
    "name": "COUNTER-PAPER_CUTTING-10",
    "type": "Counter",
    "creationDate": "2025-11-25T04:59:16Z"
  },
  {
    "key": "dev-004",
    "status": false,
    "name": "COUNTER-PAPER_CUTTING-11",
    "type": "Counter",
    "creationDate": "2025-11-25T04:59:24Z"
  },
  {
    "key": "dev-005",
    "status": true,
    "name": "COUNTER-PAPER_CUTTING-12",
    "type": "Counter",
    "creationDate": "2025-11-25T04:59:36Z"
  },
  {
    "key": "dev-006",
    "status": true,
    "name": "COUNTER-PAPER_CUTTING-13",
    "type": "Counter",
    "creationDate": "2025-11-25T04:59:44Z"
  },
  {
    "key": "dev-007",
    "status": true,
    "name": "COUNTER-PAPER_CUTTING-6",
    "type": "Counter",
    "creationDate": "2025-11-25T05:06:53Z"
  },
  {
    "key": "dev-008",
    "status": true,
    "name": "COUNTER-PAPER_CUTTING-14",
    "type": "Counter",
    "creationDate": "2025-11-25T05:07:58Z"
  },
  {
    "key": "dev-009",
    "status": true,
    "name": "EP485EWG-MASTER-01",
    "type": "EP485EWG",
    "creationDate": "2025-11-25T06:10:12Z"
  },
  {
    "key": "dev-010",
    "status": false,
    "name": "OCR-GATEWAY-ZONE-A",
    "type": "OCR Gateway",
    "creationDate": "2025-11-25T06:15:45Z"
  },
  {
    "key": "dev-011",
    "status": true,
    "name": "E-ENERGY-MAIN-F1",
    "type": "Electric Energy",
    "creationDate": "2025-11-25T07:20:00Z"
  },
  {
    "key": "dev-012",
    "status": true,
    "name": "LEVEL-SENSOR-TANK-04",
    "type": "Level",
    "creationDate": "2025-11-25T08:05:11Z"
  },
  {
    "key": "dev-013",
    "status": false,
    "name": "TEMP-CONTROLLER-B2",
    "type": "Temperature",
    "creationDate": "2025-11-25T08:30:22Z"
  },
  {
    "key": "dev-014",
    "status": true,
    "name": "GAS-MONITOR-P09",
    "type": "Gas",
    "creationDate": "2025-11-25T09:12:05Z"
  },
  {
    "key": "dev-015",
    "status": true,
    "name": "OEE-GW-LINE-01",
    "type": "OEE Gateway",
    "creationDate": "2025-11-25T10:00:00Z"
  },
  {
    "key": "dev-016",
    "status": true,
    "name": "COUNTER-PAPER_CUTTING-15",
    "type": "Counter",
    "creationDate": "2025-11-26T02:44:10Z"
  },
  {
    "key": "dev-017",
    "status": false,
    "name": "COUNTER-PAPER_CUTTING-16",
    "type": "Counter",
    "creationDate": "2025-11-26T02:45:15Z"
  },
  {
    "key": "dev-018",
    "status": true,
    "name": "EP485EWG-SLAVE-02",
    "type": "EP485EWG",
    "creationDate": "2025-11-26T03:10:00Z"
  },
  {
    "key": "dev-019",
    "status": true,
    "name": "E-ENERGY-SUB-F2",
    "type": "Electric Energy",
    "creationDate": "2025-11-26T03:22:44Z"
  },
  {
    "key": "dev-020",
    "status": false,
    "name": "GAS-MONITOR-P10",
    "type": "Gas",
    "creationDate": "2025-11-26T04:11:09Z"
  },
  {
    "key": "dev-021",
    "status": true,
    "name": "TEMP-SENSE-CHILLER",
    "type": "Temperature",
    "creationDate": "2025-11-27T01:00:00Z"
  },
  {
    "key": "dev-022",
    "status": true,
    "name": "COUNTER-PACKAGING-01",
    "type": "Counter",
    "creationDate": "2025-11-27T02:15:30Z"
  },
  {
    "key": "dev-023",
    "status": true,
    "name": "COUNTER-PACKAGING-02",
    "type": "Counter",
    "creationDate": "2025-11-27T02:16:45Z"
  },
  {
    "key": "dev-024",
    "status": false,
    "name": "OEE-GW-LINE-02",
    "type": "OEE Gateway",
    "creationDate": "2025-11-27T04:50:11Z"
  },
  {
    "key": "dev-025",
    "status": true,
    "name": "LEVEL-SENSOR-SILO-A",
    "type": "Level",
    "creationDate": "2025-11-27T05:12:00Z"
  },
  {
    "key": "dev-026",
    "status": true,
    "name": "OCR-GATEWAY-ZONE-B",
    "type": "OCR Gateway",
    "creationDate": "2025-11-27T06:45:33Z"
  },
  {
    "key": "dev-027",
    "status": false,
    "name": "E-ENERGY-HVAC-01",
    "type": "Electric Energy",
    "creationDate": "2025-11-28T09:10:15Z"
  },
  {
    "key": "dev-028",
    "status": true,
    "name": "TEMP-SENSE-OFFICE",
    "type": "Temperature",
    "creationDate": "2025-11-28T10:30:00Z"
  },
  {
    "key": "dev-029",
    "status": true,
    "name": "COUNTER-LAMINATING-1",
    "type": "Counter",
    "creationDate": "2025-11-29T01:20:44Z"
  },
  {
    "key": "dev-030",
    "status": true,
    "name": "COUNTER-LAMINATING-2",
    "type": "Counter",
    "creationDate": "2025-11-29T01:22:15Z"
  },
  {
    "key": "dev-031",
    "status": false,
    "name": "EP485EWG-BACKUP-01",
    "type": "EP485EWG",
    "creationDate": "2025-11-30T05:00:00Z"
  },
  {
    "key": "dev-032",
    "status": true,
    "name": "GAS-DETECTOR-LAB",
    "type": "Gas",
    "creationDate": "2025-12-01T08:15:22Z"
  },
  {
    "key": "dev-033",
    "status": true,
    "name": "OEE-GW-LINE-03",
    "type": "OEE Gateway",
    "creationDate": "2025-12-01T09:44:10Z"
  },
  {
    "key": "dev-034",
    "status": true,
    "name": "LEVEL-SENSOR-TANK-05",
    "type": "Level",
    "creationDate": "2025-12-02T02:11:55Z"
  },
  {
    "key": "dev-035",
    "status": false,
    "name": "E-ENERGY-LIGHTING-F1",
    "type": "Electric Energy",
    "creationDate": "2025-12-02T10:20:00Z"
  },
  {
    "key": "dev-036",
    "status": true,
    "name": "COUNTER-PRINTING-A1",
    "type": "Counter",
    "creationDate": "2025-12-03T03:30:15Z"
  },
  {
    "key": "dev-037",
    "status": true,
    "name": "COUNTER-PRINTING-A2",
    "type": "Counter",
    "creationDate": "2025-12-03T03:32:44Z"
  },
  {
    "key": "dev-038",
    "status": true,
    "name": "OCR-GATEWAY-ZONE-C",
    "type": "OCR Gateway",
    "creationDate": "2025-12-04T05:15:00Z"
  },
  {
    "key": "dev-039",
    "status": false,
    "name": "TEMP-SENSE-BOILER",
    "type": "Temperature",
    "creationDate": "2025-12-05T07:10:11Z"
  },
  {
    "key": "dev-040",
    "status": true,
    "name": "GAS-MONITOR-S-01",
    "type": "Gas",
    "creationDate": "2025-12-06T09:45:22Z"
  },
  {
    "key": "dev-041",
    "status": true,
    "name": "OEE-GW-LINE-04",
    "type": "OEE Gateway",
    "creationDate": "2025-12-07T11:00:00Z"
  },
  {
    "key": "dev-042",
    "status": true,
    "name": "COUNTER-DRYING-1",
    "type": "Counter",
    "creationDate": "2025-12-08T02:22:15Z"
  },
  {
    "key": "dev-043",
    "status": true,
    "name": "COUNTER-DRYING-2",
    "type": "Counter",
    "creationDate": "2025-12-08T02:24:44Z"
  },
  {
    "key": "dev-044",
    "status": false,
    "name": "EP485EWG-AUX-03",
    "type": "EP485EWG",
    "creationDate": "2025-12-09T04:30:00Z"
  },
  {
    "key": "dev-045",
    "status": true,
    "name": "E-ENERGY-MAIN-F2",
    "type": "Electric Energy",
    "creationDate": "2025-12-10T01:15:10Z"
  },
  {
    "key": "dev-046",
    "status": true,
    "name": "LEVEL-SENSOR-SILO-B",
    "type": "Level",
    "creationDate": "2025-12-11T05:44:33Z"
  },
  {
    "key": "dev-047",
    "status": true,
    "name": "OCR-GATEWAY-ZONE-D",
    "type": "OCR Gateway",
    "creationDate": "2025-12-12T08:20:00Z"
  },
  {
    "key": "dev-048",
    "status": false,
    "name": "TEMP-SENSE-FREEZER",
    "type": "Temperature",
    "creationDate": "2025-12-13T10:10:44Z"
  },
  {
    "key": "dev-049",
    "status": true,
    "name": "GAS-MONITOR-S-02",
    "type": "Gas",
    "creationDate": "2025-12-14T03:30:15Z"
  },
  {
    "key": "dev-050",
    "status": true,
    "name": "OEE-GW-LINE-05",
    "type": "OEE Gateway",
    "creationDate": "2025-12-15T09:15:22Z"
  },
  {
    "key": "dev-051",
    "status": true,
    "name": "COUNTER-ASSEMBLY-1",
    "type": "Counter",
    "creationDate": "2025-12-16T01:11:00Z"
  },
  {
    "key": "dev-052",
    "status": true,
    "name": "COUNTER-ASSEMBLY-2",
    "type": "Counter",
    "creationDate": "2025-12-16T01:13:30Z"
  },
  {
    "key": "dev-053",
    "status": false,
    "name": "EP485EWG-EXTERNAL",
    "type": "EP485EWG",
    "creationDate": "2025-12-17T05:00:15Z"
  },
  {
    "key": "dev-054",
    "status": true,
    "name": "E-ENERGY-SUB-F3",
    "type": "Electric Energy",
    "creationDate": "2025-12-18T07:22:44Z"
  },
  {
    "key": "dev-055",
    "status": true,
    "name": "LEVEL-SENSOR-TANK-06",
    "type": "Level",
    "creationDate": "2025-12-19T10:45:33Z"
  },
  {
    "key": "dev-056",
    "status": true,
    "name": "OCR-GATEWAY-ZONE-E",
    "type": "OCR Gateway",
    "creationDate": "2025-12-20T02:10:00Z"
  },
  {
    "key": "dev-057",
    "status": false,
    "name": "TEMP-SENSE-ENGINE",
    "type": "Temperature",
    "creationDate": "2025-12-21T04:30:15Z"
  },
  {
    "key": "dev-058",
    "status": true,
    "name": "GAS-MONITOR-LAB-02",
    "type": "Gas",
    "creationDate": "2025-12-22T08:15:22Z"
  },
  {
    "key": "dev-059",
    "status": true,
    "name": "OEE-GW-LINE-06",
    "type": "OEE Gateway",
    "creationDate": "2025-12-23T01:44:10Z"
  },
  {
    "key": "dev-060",
    "status": true,
    "name": "COUNTER-PAPER_CUTTING-20",
    "type": "Counter",
    "creationDate": "2025-12-24T10:20:00Z"
  },
  {
    "key": "dev-061",
    "status": true,
    "name": "COUNTER-PAPER_CUTTING-21",
    "type": "Counter",
    "creationDate": "2025-12-24T10:22:30Z"
  },
  {
    "key": "dev-062",
    "status": false,
    "name": "EP485EWG-ZONE-M",
    "type": "EP485EWG",
    "creationDate": "2025-12-25T05:00:15Z"
  },
  {
    "key": "dev-063",
    "status": true,
    "name": "E-ENERGY-HVAC-02",
    "type": "Electric Energy",
    "creationDate": "2025-12-26T07:15:10Z"
  },
  {
    "key": "dev-064",
    "status": true,
    "name": "LEVEL-SENSOR-OIL-01",
    "type": "Level",
    "creationDate": "2025-12-27T03:44:33Z"
  },
  {
    "key": "dev-065",
    "status": true,
    "name": "OCR-GATEWAY-ZONE-F",
    "type": "OCR Gateway",
    "creationDate": "2025-12-28T09:20:00Z"
  },
  {
    "key": "dev-066",
    "status": false,
    "name": "TEMP-SENSE-WAREHOUSE",
    "type": "Temperature",
    "creationDate": "2025-12-29T11:10:44Z"
  },
  {
    "key": "dev-067",
    "status": true,
    "name": "GAS-MONITOR-OUTDOOR",
    "type": "Gas",
    "creationDate": "2025-12-30T02:30:15Z"
  },
  {
    "key": "dev-068",
    "status": true,
    "name": "OEE-GW-LINE-07",
    "type": "OEE Gateway",
    "creationDate": "2025-12-31T05:15:22Z"
  },
  {
    "key": "dev-069",
    "status": true,
    "name": "COUNTER-INJECTION-1",
    "type": "Counter",
    "creationDate": "2026-01-01T08:44:10Z"
  },
  {
    "key": "dev-070",
    "status": true,
    "name": "COUNTER-INJECTION-2",
    "type": "Counter",
    "creationDate": "2026-01-01T08:46:15Z"
  },
  {
    "key": "dev-071",
    "status": false,
    "name": "EP485EWG-ZONE-N",
    "type": "EP485EWG",
    "creationDate": "2026-01-02T10:20:00Z"
  },
  {
    "key": "dev-072",
    "status": true,
    "name": "E-ENERGY-MAIN-BASE",
    "type": "Electric Energy",
    "creationDate": "2026-01-03T01:30:15Z"
  },
  {
    "key": "dev-073",
    "status": true,
    "name": "LEVEL-SENSOR-WASTE",
    "type": "Level",
    "creationDate": "2026-01-04T05:15:30Z"
  },
  {
    "key": "dev-074",
    "status": true,
    "name": "OCR-GATEWAY-FINAL",
    "type": "OCR Gateway",
    "creationDate": "2026-01-05T09:44:44Z"
  },
  {
    "key": "dev-075",
    "status": false,
    "name": "TEMP-SENSE-SERVER",
    "type": "Temperature",
    "creationDate": "2026-01-06T11:22:33Z"
  },
  {
    "key": "dev-076",
    "status": true,
    "name": "GAS-MONITOR-STOR-1",
    "type": "Gas",
    "creationDate": "2026-01-07T03:10:00Z"
  },
  {
    "key": "dev-077",
    "status": true,
    "name": "OEE-GW-LINE-08",
    "type": "OEE Gateway",
    "creationDate": "2026-01-08T07:45:15Z"
  },
  {
    "key": "dev-078",
    "status": true,
    "name": "COUNTER-PACK-V1",
    "type": "Counter",
    "creationDate": "2026-01-09T02:22:11Z"
  },
  {
    "key": "dev-079",
    "status": true,
    "name": "COUNTER-PACK-V2",
    "type": "Counter",
    "creationDate": "2026-01-09T02:24:30Z"
  },
  {
    "key": "dev-080",
    "status": false,
    "name": "EP485EWG-ZONE-S",
    "type": "EP485EWG",
    "creationDate": "2026-01-10T10:00:15Z"
  },
  {
    "key": "dev-081",
    "status": true,
    "name": "E-ENERGY-LIFT-01",
    "type": "Electric Energy",
    "creationDate": "2026-01-11T01:15:10Z"
  },
  {
    "key": "dev-082",
    "status": true,
    "name": "LEVEL-SENSOR-MIXER",
    "type": "Level",
    "creationDate": "2026-01-12T05:44:33Z"
  },
  {
    "key": "dev-083",
    "status": true,
    "name": "OCR-GATEWAY-INPUT",
    "type": "OCR Gateway",
    "creationDate": "2026-01-13T08:20:00Z"
  },
  {
    "key": "dev-084",
    "status": false,
    "name": "TEMP-SENSE-DUCT-1",
    "type": "Temperature",
    "creationDate": "2026-01-14T10:10:44Z"
  },
  {
    "key": "dev-085",
    "status": true,
    "name": "GAS-MONITOR-STOR-2",
    "type": "Gas",
    "creationDate": "2026-01-15T03:30:15Z"
  },
  {
    "key": "dev-086",
    "status": true,
    "name": "OEE-GW-LINE-09",
    "type": "OEE Gateway",
    "creationDate": "2026-01-16T09:15:22Z"
  },
  {
    "key": "dev-087",
    "status": true,
    "name": "COUNTER-BUFFER-1",
    "type": "Counter",
    "creationDate": "2026-01-17T01:11:00Z"
  },
  {
    "key": "dev-088",
    "status": true,
    "name": "COUNTER-BUFFER-2",
    "type": "Counter",
    "creationDate": "2026-01-17T01:13:30Z"
  },
  {
    "key": "dev-089",
    "status": false,
    "name": "EP485EWG-ZONE-T",
    "type": "EP485EWG",
    "creationDate": "2026-01-18T05:00:15Z"
  },
  {
    "key": "dev-090",
    "status": true,
    "name": "E-ENERGY-OFFICE-F1",
    "type": "Electric Energy",
    "creationDate": "2026-01-19T07:22:44Z"
  },
  {
    "key": "dev-091",
    "status": true,
    "name": "LEVEL-SENSOR-GLUE",
    "type": "Level",
    "creationDate": "2026-01-20T10:45:33Z"
  },
  {
    "key": "dev-092",
    "status": true,
    "name": "OCR-GATEWAY-LOAD",
    "type": "OCR Gateway",
    "creationDate": "2026-01-21T02:10:00Z"
  },
  {
    "key": "dev-093",
    "status": false,
    "name": "TEMP-SENSE-PIPE-X",
    "type": "Temperature",
    "creationDate": "2026-01-22T04:30:15Z"
  },
  {
    "key": "dev-094",
    "status": true,
    "name": "GAS-MONITOR-VENT",
    "type": "Gas",
    "creationDate": "2026-01-23T08:15:22Z"
  },
  {
    "key": "dev-095",
    "status": true,
    "name": "OEE-GW-LINE-10",
    "type": "OEE Gateway",
    "creationDate": "2026-01-24T01:44:10Z"
  },
  {
    "key": "dev-096",
    "status": true,
    "name": "COUNTER-QC-CHECK-1",
    "type": "Counter",
    "creationDate": "2026-01-25T10:20:00Z"
  },
  {
    "key": "dev-097",
    "status": true,
    "name": "COUNTER-QC-CHECK-2",
    "type": "Counter",
    "creationDate": "2026-01-25T10:22:30Z"
  },
  {
    "key": "dev-098",
    "status": false,
    "name": "EP485EWG-MASTER-F3",
    "type": "EP485EWG",
    "creationDate": "2026-01-26T05:00:15Z"
  },
  {
    "key": "dev-099",
    "status": true,
    "name": "E-ENERGY-PUMP-ROOM",
    "type": "Electric Energy",
    "creationDate": "2026-01-27T07:15:10Z"
  },
  {
    "key": "dev-100",
    "status": true,
    "name": "COUNTER-FINAL-OUT",
    "type": "Counter",
    "creationDate": "2026-01-28T03:44:33Z"
  }
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

export const DetailsTab = () => {
  const { styles } = useStyle();
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint(); 
  const menuMode = screens.lg ? 'inline' : 'horizontal';
  const [selectedMenuKey, setSelectedMenuKey] = useState('1');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState<DataType[]>(data); 
  const [editingRecord, setEditingRecord] = useState<DataType | null>(null);
  const [types, setTypes] = useState<MenuItem[]>(items);

  const handleCategorize = (value: string) => {
    if (!value) {
      setTypes(items);
    } else {
      const lowercasedValue = value.toLowerCase();
      const filteredTypes = items.filter((item) => {
        if (item && typeof item === 'object' && 'label' in item && typeof item.label === 'string') {
          return item.label.toLowerCase().includes(lowercasedValue);
        }
        return false;
      });
      setTypes(filteredTypes);
    }
  };

const handleFinish = (values: DataType) => {
    if (editingRecord) {
      // Sua record
      const newData = dataSource.map((item) =>
        item.key === editingRecord.key ? { ...item, ...values } : item
      );
      setDataSource(newData);
      message.success('Cập nhật thiết bị thành công!');
    } else {
      // tao moi record
      const newItem = {
        ...values,
        creationDate: new Date().toISOString(),
      };
      setDataSource([newItem, ...dataSource]);
      message.success('Tạo thiết bị mới thành công!');
    }
    handleCancel();
  };

  const handleDelete = (key: string) => {
    setDataSource(dataSource.filter((item) => item.key !== key));
    message.success('Đã xóa thiết bị!');
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditingRecord(null);
    form.resetFields();
  };

  const typeMapping: Record<string, string> = {
    '1': 'default',
    '2': 'EP485EWG',
    '3': 'OCR Gateway',    
    '4': 'Electric Energy',
    '5': 'Level',
    '6': 'Temperature',    
    '7': 'Counter',
    '8': 'Gas',
    '9': 'OEE Gateway',
  };

  const columns: TableColumnsType<DataType> = [
  {
    title: '',
    dataIndex: 'status',
    filters: [
      {
        text: 'True',
        value: true,
      },
      {
        text: 'False',
        value: false,
      },
    ],
    width: 50,
    fixed: 'start',
    render: (status) => (
      <div className={`size-4 m-auto rounded-full ${status ? "bg-green-500" : "bg-red-500"}`} />
    ),
    onFilter: (value, record) => record.status === value,
  },
  {
    title: 'Tên thiết bị',
    dataIndex: 'name',
    width:250,
  },
  {
    title: 'Loại thiết bị',
    dataIndex: 'type',
    width: 200,
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'creationDate',
    width: 200,
    render: (date) => {
      const formattedDate = new Date(date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      return formattedDate;
    },
  },
  {
    title: '',
    width: 80,
    fixed: 'end',
    render: (_, record) => {
        const actionItems: MenuProps['items'] = [
          {
            key: 'edit',
            label: 'Sửa',
            onClick: () => {
              setEditingRecord(record);
              form.setFieldsValue(record); 
              setIsModalOpen(true);
            },
          },
          {
            key: 'delete',
            danger: true,
            label: (
              <Popconfirm
                title="Xóa thiết bị"
                description={`Bạn có chắc chắn muốn xóa "${record.name}" không?`}
                onConfirm={() => handleDelete(record.key)}
                okText="Xóa"
                cancelText="Hủy"
              >
                <div style={{ width: '100%' }}>Xóa</div>
              </Popconfirm>
            ),
          },
        ];
      return (
        <div className='text-center'>
          <Dropdown menu={{ items: actionItems }} trigger={['click']} placement="bottomRight">
            <Button
              type='text'
              icon={<ExclamationCircleOutlined />}
            />
          </Dropdown>
        </div>
      )
    }
  },
];

  const filteredData = selectedMenuKey === '1' 
    ? dataSource 
    : dataSource.filter(item => item.type === typeMapping[selectedMenuKey]);

  const handleSearch = (value: string) => {
    const lowercasedValue = value.toLowerCase();
    if (lowercasedValue === '') {
      setDataSource(data);
      return;
    }
    const searchedData = dataSource.filter(item =>
      item.name.toLowerCase().includes(lowercasedValue)
    )
    setDataSource(searchedData);
  }
  
  return (
    <div className='flex flex-1 flex-col bg-white rounded-md min-w-0 min-h-0 overflow-hidden'>
      <div className='border-b-2 border-[#BBCFEE] p-2'>
        <p className='text-left text-[#1777FF] font-bold text-2xl'>Thiết bị</p>
      </div>

    
      <div className='flex flex-1 flex-col lg:flex-row min-h-0 overflow-hidden'>
          {/* Category section */}
        <div className='w-full lg:w-52 border-b-2 lg:border-b-0 lg:border-r-2 border-[#BBCFEE] bg-gray-50/50 flex flex-col'>
          <div className='p-2 flex flex-col gap-2'>
            <Search 
              placeholder="Search" 
              allowClear 
              onSearch={onSearch} 
              onChange={(e) => handleCategorize(e.target.value)}
              style={{ 
                width: '100%', 
              }} 
            />
          </div>
          <div className={`pb-2 lg:p-2 flex-1 w-full overflow-y-auto ${styles.thinScrollbar}`}>
            <Menu 
              theme="light"
              className='border-none bg-transparent lg:border-r [&_.ant-menu-item]:flex [&_.ant-menu-item]:justify-start [&_.ant-menu-item]:items-center [&_.ant-menu-item]:gap-3 [&_.ant-menu-title-content]:text-left [&_.ant-menu-title-content]:m-0'
              defaultSelectedKeys={['1']} 
              selectedKeys={[selectedMenuKey]}
              onSelect={(info) => setSelectedMenuKey(info.key)}
              mode={menuMode} 
              items={types} 
              />
          </div>
        </div>

        {/* Table section */}
        <div className='flex flex-1 flex-col min-w-0 min-h-0'>
          <div className='flex p-2 justify-between'>
            <Button
              type='primary'
              style={{
                padding: '10px',
                border: 'none', 
              }}
              onClick={() => setIsModalOpen(true)}
              >
              Tạo
            </Button>
            <Search placeholder="Search" allowClear onSearch={onSearch} onChange={(e) => handleSearch(e.target.value)} style={{ width: 200 }} />
          </div>
          <div className={`flex-1 border-t-2 border-[#BBCFEE] overflow-y-auto min-h-0 ${styles.thinScrollbar}`}>
            <ConfigProvider
              theme={{
                components: {
                  Table: {
                    headerBg: '#B5DCFF', 
                    padding: 6,
                  },
                },
              }}
            >
              <Table<DataType>
                className={styles.customTable}
                columns={columns}
                dataSource={filteredData}
                bordered
                size='middle'
                onChange={onChange}
                scroll={{ x: 800, y: screens.lg ? 'calc(100vh - 360px)' : 600 }}
                showSorterTooltip={{ target: 'sorter-icon' }}
                pagination={{
                  total: filteredData.length,
                  showTotal: (total) => `Tổng cộng: ${total}`,
                  defaultPageSize: 10,
                  showSizeChanger: true,
                  pageSizeOptions: ['10', '20', '50', '100'],
                  size: 'middle',
                }}
              />
            </ConfigProvider>
            
            <Modal
              title="Tạo thiết bị mới"
              open={isModalOpen}
              onOk={() => form.submit()}
              onCancel={handleCancel}
              okText="Lưu"
              cancelText="Hủy"
            >
              <Form 
                form={form} 
                layout="vertical" 
                onFinish={handleFinish}
                initialValues={{ status: true, type: 'Counter' }}
              >
                <Form.Item 
                  name="key" 
                  label="Mã thiết bị" 
                  rules={[{ required: true, message: 'Vui lòng nhập mã thiết bị!' }]}
                >
                  <Input placeholder="Ví dụ: dev-001" />
                </Form.Item>
                <Form.Item 
                  name="name" 
                  label="Tên thiết bị" 
                  rules={[{ required: true, message: 'Vui lòng nhập tên thiết bị!' }]}
                >
                  <Input placeholder="Ví dụ: COUNTER-PAPER_CUTTING-99" />
                </Form.Item>

                <Form.Item 
                  name="type" 
                  label="Loại thiết bị" 
                  rules={[{ required: true, message: 'Vui lòng chọn loại thiết bị!' }]}
                >
                  <Select
                    options={[
                      { value: 'Counter', label: 'Counter' },
                      { value: 'EP485EWG', label: 'EP485EWG' },
                      { value: 'OCR Gateway', label: 'OCR Gateway' },
                      { value: 'Electric Energy', label: 'Electric Energy' },
                      { value: 'Level', label: 'Level' },
                      { value: 'Temperature', label: 'Temperature' },
                      { value: 'Gas', label: 'Gas' },
                      { value: 'OEE Gateway', label: 'OEE Gateway' },
                    ]}
                  />
                </Form.Item>

                <Form.Item 
                  name="status" 
                  label="Trạng thái hoạt động" 
                  valuePropName="checked"
                >
                  <Switch checkedChildren="Bật" unCheckedChildren="Tắt" />
                </Form.Item>
              </Form>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  )
}
