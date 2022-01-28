import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];
const rows = [
    {
        name: 'Frozen yoghurt',
        calories: 122,
        fat: 12,
        carbs: 12,
        protein: 45,
        subItems: [
            {
                name: 'Frozen yoghurt sub1',
                calories: 122,
                fat: 12,
                carbs: 12,
                protein: 45,
                type: 'sub1',
                subItems: [
                    {
                        name: 'Frozen yoghurt sub2',
                        calories: 122,
                        fat: 12,
                        carbs: 12,
                        type: 'sub2',
                        protein: 45
                    }
                ],
            }
        ],
    },
    {
        name: 'Frozen yoghurt',
        calories: 122,
        fat: 12,
        carbs: 12,
        protein: 45,
        subItems: [
            {
                name: 'Frozen yoghurt sub1',
                calories: 122,
                fat: 12,
                carbs: 12,
                type: 'sub1',
                protein: 45,
                subItems: [
                    {
                        name: 'Frozen yoghurt sub2',
                        calories: 122,
                        fat: 12,
                        carbs: 12,
                        protein: 45,
                        type: 'sub2',
                    }
                ],
            }
        ],
    },
    {
        name: 'Ice cream sandwich',
        calories: 122,
        fat: 12,
        carbs: 12,
        protein: 45,
        subItems: [
            {
                name: 'Ice cream sandwich sub1',
                calories: 122,
                fat: 12,
                carbs: 12,
                protein: 45,
                type: 'sub1',
                subItems: [
                    {
                        name: 'Ice cream sandwich sub2',
                        calories: 122,
                        fat: 12,
                        carbs: 12,
                        type: 'sub2',
                        protein: 45
                    }
                ],
            }
        ],
    }
]


const MyRow = ({ Row, isSubItem }) => {
    const [subsVisiblity, setSubsVisiblity] = React.useState(false);
    const hasSubItems = Boolean(Row.subItems);
    return (
        <>
            <TableRow
                key={Row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={() => {
                    if (Row.subItems) {
                        setSubsVisiblity(!subsVisiblity)
                    }
                }}
            >
                <TableCell style={Row.type ? { paddingLeft: Row.type=="sub1" ? "35px" : "55px"  } : undefined} component="th" scope="row" sty>
                    {Row.name} {isSubItem ? 'baby' : ''}
                </TableCell>
                <TableCell align="right">{Row.calories}</TableCell>
                <TableCell align="right">{Row.fat}</TableCell>
                <TableCell align="right">{Row.carbs}</TableCell>
                <TableCell align="right">{Row.protein}</TableCell>
            </TableRow>
            {(hasSubItems && subsVisiblity) ?
                <>
                    {Row.subItems.map(r => {
                        return <MyRow key={`${Row.title}-${r.title}`} Row={r} isSubItem={Row.subItems} />
                    })
                    }
                </>
                : null
            }
        </>
    )
}

export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <MyRow key={row.title} Row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
