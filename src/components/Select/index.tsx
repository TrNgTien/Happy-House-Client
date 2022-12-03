import { useState } from 'react';
// import styled, { css } from 'styled-components';

// const SelectContainer = styled.div`
//   position: relative;
//   margin: 0;
// `;
// const SelectLabelButton = styled.button`
//   padding: 0.3rem 0.5rem;
//   min-width: 7rem;
//   font-size: 0.9rem;
//   font-weight: 500;
//   background-color: #fff;
//   border: none;
//   border-radius: 5px;
//   color: #111;
//   align-items: center;
//   justify-content: space-between;
//   border: 1px solid slategrey;
//   cursor: pointer;
//   box-shadow: 0 1px 4px 0 #ccc;
//   transition: 0.3s ease;
//   &:hover {
//     background-color: #eee;
//   }
// `;
// const DropdownStyle = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   max-height: 40vmax;
//   min-width: 10rem;
//   padding: 0.4rem;
//   display: flex;
//   flex-direction: column;
//   border-radius: 5px;
//   background: #fafafa;
//   border: 1.5px solid slategrey;
//   transition: max-height 0.2s ease;
//   overflow: scroll;
//   ${(p: any) =>
//     p.isVisible !== true &&
//     css`
//       max-height: 40px;
//       visibility: hidden;
//     `}
// `;
// const DropdownItem = styled.div`
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
//     Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//   display: flex;
//   align-items: center;
//   width: 90%;
//   margin: 0.15rem 0;
//   padding: 0.3rem 0.5rem;
//   font-size: 0.9rem;
//   font-weight: 400;
//   color: #333;
//   border-radius: 0.3rem;
//   cursor: pointer;
//   ${(p: any) =>
//     p.active &&
//     css`
//       color: #166edc;
//       font-weight: 500;
//     `}
//   &:hover, :focus, :focus:hover {
//     background-color: #166edc;
//     color: #fafafa;
//     outline: none;
//   }
// `;

// interface Props {
//   label: string;
//   values: Array<any>;
//   onChange: (value?: any) => {};
// }
// export const Select = ({ label, values, onChange }: Props) => {
//   const [currentValue, setCurrentValue] = useState('');
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handleValueChange = (value: any) => {
//     setCurrentValue(value);
//   };
//   const handleChange = (value: any) => {
//     handleValueChange(value);
//     // call method, if it exists
//     if (onChange) onChange(value);
//     // close, after all tasks are finished
//     handleClose();
//   };
//   return (
//     <SelectContainer>
//       <SelectLabelButton onClick={handleOpen}>
//         {currentValue !== '' ? currentValue : label}
//       </SelectLabelButton>
//       <DropdownStyle isVisible={open}>
//         {values.map((value, index) => (
//           <DropdownItem
//             onClick={() => handleChange(value)}
//             active={value === currentValue}
//             key={index}
//           >
//             {value}
//           </DropdownItem>
//         ))}
//       </DropdownStyle>
//     </SelectContainer>
//   );
// };
