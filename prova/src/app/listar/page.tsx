// "use client";

// import api from "@/services/api";
// import Item from "@/types/items";
// import { Container, Typography, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, TablePagination } from "@mui/material";
// import axios from "axios";
// import { error } from "console";
// import { useEffect, useState } from "react";

// function ItemListar() {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [itens, setItens] = useState<Item[]>([]);

//   // useEffect(() => {
//   //   api
//   //     .get<Item[]>("/produto/listar")
//   //     .then((resposta) => {
//   //       setItens(resposta.data);
//   //       console.table(resposta.data);
//   //     })
//   //     .catch((erro) => {
//   //       console.log(erro);
//   //     });
//   // }, []);

//   useEffect(() => {
//     api.get<Item[]>("")
//     .then((resposta) => {
//       setItens(resposta.data);
//       console.log(resposta.data);
//     })
//     .catch((error) =>{
//       console.log(error)
//     });
//   }, []);
//   return (
//     <Container maxWidth="md" sx={{ mt: 4 }}>
//       <Typography variant="h4" component="h1" gutterBottom>
//         Listar Itens
//       </Typography>
//       <TableContainer component={Paper} elevation={10}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>#</TableCell>
//               <TableCell>Nome</TableCell>
//               <TableCell>categoria</TableCell>
//               <TableCell>Criado Em</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {/* {itens
//               .slice(
//                 page * rowsPerPage,
//                 page * rowsPerPage + rowsPerPage
//               )
//               .map((produto) => (
//                 <TableRow key={produto.id}>
//                   <TableCell>{produto.id}</TableCell>
//                   <TableCell>{produto.nome}</TableCell>
//                   <TableCell>{produto.criadoEm}</TableCell>
//                 </TableRow>
//               ))} */}
//           </TableBody>
//         </Table>
//         <TablePagination
//           component="div"
//           count={itens.length}
//           page={page}
//           onPageChange={(_, newPage) => setPage(newPage)}
//           rowsPerPage={rowsPerPage}
//           onRowsPerPageChange={(e) => {
//             setRowsPerPage(parseInt(e.target.value, 10));
//             setPage(0);
//           }}
//           labelRowsPerPage="Itens por página"
//         />
//       </TableContainer>
//     </Container>
//   );
// }

// export default ItemListar;
