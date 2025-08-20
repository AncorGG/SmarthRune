import { Progress } from "antd";
import Footer from "../../components/footer/Footer";
import './CharacterDetail.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FiSun, FiEdit3 } from "react-icons/fi";
import { GoDot, GoDotFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { TbArrowsExchange } from "react-icons/tb";

function CharacterDetail() {

	const [inventoryTrack, setInventoryTrack] = useState(0);
	const [isEditing, setIsEditing] = useState(false);
	const [showEditModal, setShowEditModal] = useState(false);
	const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);
	const navigate = useNavigate();

	const goto = (url) => {
		navigate(url);
	};


	const handleInventoryTrack = (value) => {
		setInventoryTrack(inventoryTrack + value);
	}

	const toggleEditMode = () => {
		setIsEditing(!isEditing);
	}

	const openAddModal = () => {
		const newItem = {
			id: inventoryItems[inventoryItems.length - 1].id + 1 || 1,
			name: "",
			quantity: 1,
			weight: 0,
		};
		setIsEditing(true);
		setSelectedItem(newItem);
		setShowEditModal(true);
	}

	const openEditModal = (item) => {
		setSelectedItem(item);
		setShowEditModal(true);
	};

	const closeEditModal = () => {
		setSelectedItem(null);
		setShowEditModal(false);
	};

	const closeModalsOnClickOutside = (e) => {
		if (e.target.className === "modal-overlay") {
			setShowEditModal(false);
			setShowDeleteConfirm(false);
		}
	};

	const openDeleteConfirm = () => {
		setShowEditModal(false);
		setShowDeleteConfirm(true);
	};

	const closeDeleteConfirm = () => {
		setShowDeleteConfirm(false);
		setShowEditModal(true);
	};

	const handleSaveItem = (updatedItem) => {
		const itemExists = inventoryItems.some(item => item.id === updatedItem.id);
		if (itemExists) {
			setInventoryItems(
				inventoryItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
			);
		} else {
			setInventoryItems([updatedItem, ...inventoryItems]);
		}
		closeEditModal();
	};

	const handleDeleteItem = () => {
		setInventoryItems(inventoryItems.filter((item) => item.id !== selectedItem.id));
		setShowDeleteConfirm(false);
		closeEditModal();
	};

	const handleModalChange = (e) => {
		const { name, value } = e.target;
		setSelectedItem({ ...selectedItem, [name]: value });
	};

	const formatWeight = (grams) => {
		if (grams >= 1000) {
			const kilograms = grams / 1000;
			return `${kilograms.toLocaleString()} Kg`;
		}
		return `${grams.toLocaleString()} g`;
	}

	// DATOS DE PRUEBAAAAA

	const [inventoryItems, setInventoryItems] = useState([
		{ id: 1, name: "Poción de Maná", quantity: 1, weight: 300 },
		{ id: 2, name: "Raciones", quantity: 5, weight: 1500 },
		{ id: 3, name: "Antorchas", quantity: 6, weight: 1000 },
		{ id: 4, name: "Setas Mágicas de Potilandia", quantity: 17, weight: 7000 },
		{ id: 5, name: "Caja de Botones", quantity: 2, weight: 1400 },
		{ id: 6, name: "Moldeador de almas", quantity: 1, weight: 2300 },
		{ id: 7, name: "Nada", quantity: 1, weight: 0 },
	]);

	return (
		<div className="character-detail">
			<div className="main-content">

				<div className="c-header">
					<div className="c-back-button" onClick={() => goto("/")}><IoIosArrowBack size={30} /></div>
					<div className="c-bizzum"><MdAttachMoney size={30} /></div>
				</div>

				<div className="c-image">
					<img src="/images/pfp.png" alt="Profile Picture" />
				</div>

				<div className="c-info">
					<h1 className="c-name">Jack O' Blivion</h1>
					<h2 className="c-campaign">Mazmorreos casuales</h2>
					<hr className="c-hr" />
					<div className="c-info-bot">
						<div>
							<IoLocationOutline size={25} color="#D6202E" />
							<p>Contraviento, Livadi</p>
						</div>
						<div>
							<FiSun size={25} color="#D6202E" />
							<p>AE 24</p>
						</div>
					</div>
				</div>

				<div className="c-level">
					<div className="c-level-info">
						<h3>Level 7 | Nihility Cleric</h3>
						<h3>67%</h3>
					</div>
					<div className="progress-container">
						<Progress
							percent={67}
							showInfo={false}
							strokeColor={{
								'0%': '#f63c3c',
								'50%': '#ff5e9e',
							}}
							size={[300, 20]}
							trailColor="#e7e7e7"
						/>
					</div>
				</div>

				<div className="c-stats">
					<vl className="c-vl" />
					<div className="c-stat">
						<h3>HP</h3>
						<p>26</p>
					</div>
					<vl className="c-vl" />
					<div className="c-stat">
						<h3>Speed</h3>
						<p>30</p>
					</div>
					<vl className="c-vl" />
					<div className="c-stat">
						<h3>AC</h3>
						<p>14</p>
					</div>
					<vl className="c-vl" />
				</div>

				<div className="c-inventory-container">
					{
						inventoryTrack !== 0 ? (
							<div className="c-i-arrow-back">
								<IoIosArrowBack size={30} color="#cecece" onClick={() => handleInventoryTrack(-1)} />
							</div>
						) : (
							<div className="c-i-arrow-back">
								<IoIosArrowBack size={30} color="#fff" />
							</div>
						)
					}
					{
						inventoryTrack === 0 ? (
							<div className="c-i-currency">
								<div className="c-i-currency-livadi">
									<h3>Broams</h3>
									<p>14</p>
									<hr className="c-hr" />
									<div className="c-i-currency-small">
										<div>
											<h3>Chips</h3>
											<p>67</p>
										</div>
										<vl className="c-vl" />
										<div>
											<h3>Rucks</h3>
											<p>125</p>
										</div>
									</div>
								</div>
								<div className="c-i-exchange">
									<TbArrowsExchange size={35} color="#cecece" />
								</div>
							</div>
						) : (inventoryTrack === 1 ? (
							<div className="c-i-currency">
								<div className="c-i-currency-vinter">
									<div className="c-i-currency-samll">
										<h3>Frags</h3>
										<p>21</p>
									</div>
									<vl className="c-vl" />
									<div className="c-i-currency-samll">
										<h3>Frost</h3>
										<p>46</p>
									</div>
								</div>
								<div className="c-i-exchange">
									<TbArrowsExchange size={35} color="#cecece" />
								</div>
							</div>
						) : (
							<div className="c-i-list">
								{inventoryItems.map((item) => (
									<div
										key={item.id}
										className={`c-i-item ${isEditing ? 'c-i-item-editable' : ''}`}
										onClick={() => openEditModal(item)}
									>
										<h3 className="c-i-quantity">{item.quantity}</h3>
										<p className="c-i-name">{item.name}</p>
										<p className="c-i-weight"> {formatWeight(item.weight)}</p>
									</div>
								))}
								<div className="c-i-add" onClick={openAddModal}>
									<FaPlus size={20} color="#cecece" />
								</div>
							</div>
						))
					}
					{
						inventoryTrack !== 2 ? (
							<div className="c-i-arrow-forward">
								<IoIosArrowForward size={30} color="#cecece" onClick={() => handleInventoryTrack(1)} />
							</div>
						) : (
							<div className="c-i-edit" onClick={toggleEditMode}>
								<FiEdit3 size={30} color={isEditing ? "#ffc456ff" : "#cecece"} />
							</div>
						)
					}
				</div>
				<div className="c-inventory-track">
					{
						inventoryTrack === 0 ? (
							<GoDotFill color="#D6202E" />
						) : (
							<GoDot color="#828282" />
						)
					}
					{
						inventoryTrack === 1 ? (
							<GoDotFill color="#D6202E" />
						) : (
							<GoDot color="#828282" />
						)
					}
					{
						inventoryTrack === 2 ? (
							<GoDotFill color="#D6202E" />
						) : (
							<GoDot color="#828282" />
						)
					}
				</div>

				{/* Edit Modal */}
				{showEditModal && selectedItem && (
					<div className="modal-overlay" onClick={closeModalsOnClickOutside}>
						<div className="modal-content" onClick={e => e.stopPropagation()}>
							<div className="modal-form">
								<label>
									{isEditing ? (
										<input
											type="text"
											name="name"
											value={selectedItem.name}
											onChange={handleModalChange}
										/>
									) : (
										<p className="modal-info-header">{selectedItem.name}</p>
									)}
								</label>
								<label>
									Quantity:
									{isEditing ? (
										<input
											type="number"
											name="quantity"
											value={selectedItem.quantity}
											onChange={handleModalChange}
										/>
									) : (
										<p className="modal-info-text">{selectedItem.quantity}</p>
									)}
								</label>
								<label>
									Weight:
									{isEditing ? (
										<input
											type="text"
											name="weight"
											value={selectedItem.weight}
											onChange={handleModalChange}
										/>
									) : (
										<p className="modal-info-text">{formatWeight(selectedItem.weight)}</p>
									)}
								</label>
							</div>
							{isEditing && (
								<div className="modal-buttons">
									<button className="delete-button" onClick={openDeleteConfirm}>Delete</button>
									<button className="save-button" onClick={() => handleSaveItem(selectedItem)}>Save</button>
								</div>
							)}
						</div>
					</div>
				)}

				{/* Delete Confirmation Modal */}
				{showDeleteConfirm && (
					<div className="modal-overlay" onClick={closeModalsOnClickOutside}>
						<div className="modal-content" onClick={e => e.stopPropagation()}>
							<h3 className="modal-confirm-h3">Are you sure you want to delete?</h3>
							<div className="modal-buttons">
								<button className="cancel-button" onClick={closeDeleteConfirm}>Cancel</button>
								<button className="confirm-button" onClick={handleDeleteItem}>Delete</button>
							</div>
						</div>
					</div>
				)}
			</div>
			<Footer activeIcon={"user"} />
		</div>
	);
}
export default CharacterDetail;