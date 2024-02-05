import request from 'supertest'
import { describe, expect, test } from 'vitest'
import app from '../src/index';

describe("Test the root path",async () => {
    const response = await request(app).get("/");

    test("It should response the GET method", () => {
        expect(response.text).toBe("welcome to expressTS");
    });
    test("status should be 200" , async ()=>{
        expect(response.status).toBe(200);
    })
});