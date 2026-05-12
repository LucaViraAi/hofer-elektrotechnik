import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

# Backend API tests for Hofer Elektrotechnik

class TestAPIRoot:
    def test_root_returns_message(self):
        r = requests.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data

class TestContactAPI:
    def test_post_contact_success(self):
        payload = {"name": "TEST_Max Mustermann", "phone": "0234123456", "message": "TEST inquiry"}
        r = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert data.get("success") is True
        assert "message" in data

    def test_post_contact_missing_fields(self):
        r = requests.post(f"{BASE_URL}/api/contact", json={"name": "Only Name"})
        assert r.status_code == 422

    def test_get_contact_returns_list(self):
        r = requests.get(f"{BASE_URL}/api/contact")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)

    def test_post_and_verify_persistence(self):
        payload = {"name": "TEST_Persist Check", "phone": "012345", "message": "Persisted?"}
        requests.post(f"{BASE_URL}/api/contact", json=payload)
        r = requests.get(f"{BASE_URL}/api/contact")
        assert r.status_code == 200
        names = [item["name"] for item in r.json()]
        assert "TEST_Persist Check" in names
